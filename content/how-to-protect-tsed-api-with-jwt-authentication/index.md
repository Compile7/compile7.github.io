---
title: "How to Protect Ts.Ed API with JWT Authentication"
date: "2022-10-19"
coverImage: tsed-api-authentication-with-jwt.png
tags:
 - JWT
 - Ts.ED
 - Authentication
description: "In this tutorial, you'll build a simple Ts.Ed API and learn how to protect it from unauthorized users with JWT Authentication."
author: "Ekekenta Odionyenfe Clinton"
---

## Introduction

Authentication is one of the most crucial aspects of any web application, as it allows you to keep the data in your APIs safe. You can use JSON Web Token (JWT) authentication to protect APIs from unauthorized users.

JWT is a common standard for securely transferring data between two parties over the internet as JSON objects with a concise and self-contained method. It stores information in a format that developers and computers can understand, and the token's small size makes it easy to send via URL, POST parameter, or HTTP header.

In other words, JWT enables two parties — usually a client and a server — to securely exchange information. A secret or public/private key pair is used to sign a JWT digitally.

In this tutorial, you'll learn how to protect your Ts.ED API with JWT Authentication.

## What is Ts.ED?

Ts.ED is a Node.js framework written in TypeScript. You can use it to quickly build scalable server-side applications and create applications using object-oriented programming, functional programming, or decorators. You can either use the complete out-of-the-box project or customize it on your own.

## Why use Ts.ED?

Before starting, let's understand why Ts.ED is a fantastic framework for web developers:

- You can create REST APIs more quickly with OpenSpec and JSON Schema compliance. The rich CLI tool allows you to create a pre-configured server, saving you time, and it has a plethora of plugins from which to build your stack.
- Ts.ED is a class-based framework. So, controllers, pipes, and middleware are all created as classes.
- It comes with built-in features to help simplify application testing. 

## Prerequisites

To get the most out of this hands-on tutorial, have the following in your development machine:

- Any code editor you like
- Know the basics of JavaScript/[TypeScript](https://www.typescriptlang.org/)
- Know the basics of [MongoDB](https://www.mongodb.com/)
- Have [Postman](https://www.postman.com/) or [Insomia](https://insomnia.rest/) installed

## Getting Started

To get started with Ts.ED, you need to install the CLI tool by running the command below.

```
npm install -g @tsed/cli
```

After the installation, scaffold a new Ts.ED project with the following command.

```
mkdir jwt_tsed && cd jwt_tsed && 
tsed init .
```

The `tsed init .` command prompts you to select project configurations. Choose the following:

- Target platform: **Express**
- Architecture for the project: **Ts.ED**
- Convention file styling: choose **Ts.ED**
- The features needed for your project: **Database**
- The ORM Manager: Mongoose
- The package manager: **Yarn**

After going through the prompts, the command creates a new project directory and populates the directory with the initial core Ts.ED files and supporting modules for the project.

## Installing Dependencies

With the project created, let's install the required dependencies to run the application.

```node
npm install passport passport-jwt @types/passport-jwt @types/jsonwebtoken express-session @types/express-session mongoose @tsed/mongoose @types/passport-local
```

The above command will install the following Node.js dependencies:
- Mongoose
- Passport
- Passport-jwt
- Express Session
- Jsonwebtoken

## Generate User Schema/Model

With the dependencies installed, let's create a user schema.

In Mongoose, everything begins with a Schema. Each schema corresponds to a MongoDB collection and defines the structure of the documents contained within that collection. To create a model for your Ts.ED application, you either use the CLI tool or do it manually. For this tutorial, let's use the CLI tool to create a model by running the following command.

```
tsed generate model User
```

The above command creates a `models/UserModel.ts` file in the `src` directory. Now, update the file with the following code snippet.

```js
import { Property, Required } from "@tsed/schema";
import { Model, ObjectID } from "@tsed/mongoose";

@Model()
export class User {
  @ObjectID('id')
  _id: string

  @Property()
  email: string

  @Property()
  password: string

  @Property()
  @Required(false)
  token: string
}
```

The above code snippet imports the required decorators to define your User model class:

- The `@ObjectID` decorator allows you to generate random IDs for each record in your model
- The `@Property()` decorator allows you to define the properties of a model
- The `@Model` decorator allows you to define a class as a Mongoose Model

## Generate User Service

With the User model created, create a service provider for the application. To do that, generate a User service provider by running the following command.

```
tsed generate service Users
```

The above command generates a `services/UsersService.ts` in the `src` directory. Update the file with the following code snippet.

```js
import { Injectable, Inject } from "@tsed/di";
import { User } from "../models/UserModel";
import { MongooseModel } from "@tsed/mongoose";

@Injectable()
export class UsersService {
  @Inject(User) private model: MongooseModel<User>

  async create(body: any): Promise<User> {
    return this.model.create(body)
  }

  async findOne(query: any): Promise<any | undefined> {
    return await this.model.findOne(query);
  }

  async verifyPassword(password: string, email: string) {
    const user = await this.findOne({ email })
    return user?.password === password
  }

  attachToken(user: User, token: string) {
    user.token = token;
  }
}
```

The above code snippet imports all the required decorators. The imported `Injectable()` decorator allows you to inject the service provider into another service, and the `MongooseModel` to inject the User model into your service to access the methods that will allow performing CRUD operations on the User model.

## Generate User Controller

Next, create a User controller to delegate tasks to your service providers by running the following command.

```
tsed generate controller Users
```

The above command prompts you to select the route and directory for this controller. Select `/users` for the route and `rest` for the directory. Then the command generates a `controllers/rest/UsersController.ts` file. Now update the code in the file with the following.

```js
import { Controller, Get, Post, Req, Inject, BodyParams } from "@tsed/common";
import { User } from "../../models/UserModel";
import { UsersService } from "src/services/UsersService";

@Controller("/users")
export class AuthController {
  @Inject()
  usersService: UsersService;
  
 @Get()
  getUser(@Req("user") user: User): User {
    return user;
  }
  @Post("/signup")
  create(@BodyParams("email") email: string, @BodyParams("password") password: string): Promise<User> {
    return this.usersService.create({
      email, password,
    })
}
```

The above code snippet imports the `UserService` provider to delicate tasks to the methods defined there. Then it used the `@Controller` decorator to declare a new controller with an API route. And it created a controller to create a new user and to get all the users in the User model. The `getUser` endpoint is accessible to everyone, which does not guarantee user data integrity. So, let's add authentication and protect this route.

## Configure Passport

Let's add authentication to the project using [Passport.js](https://www.passportjs.org/). To get started, open the `src/config/index.ts` file, import the `User` model, and configure Passport.

```js
...
import {User} from "../models/UserModel";

export const config: Partial<TsED.Configuration> = {
	...
	passport: {
		disableSession: true,
		userInfoModel: User
	 },
	   // additional shared configuration   
};
...
```

By default, Ts.ED uses a `UserInfo` model to serialize and deserialize users in session, so in the above snippet, you used the `User` model created as your `UserInfo` model.

Then add the express-session middleware in the array of middleware in the `Server.ts` file.

```js
 //...
 middlewares: [
      //...
      session({
      secret: "secret",
      resave: true,
      saveUninitialized: true
    })
	//...
 ]
// ...
```

## Create JWT Protocols

A Protocol is a type of Ts.ED service is used to declare a Passport Strategy and manage the lifecycle of a Passport.

First, let's create one to declare your Passport Strategy. Create the `protocol/JwtProtocol.ts` file in the `src` folder and update the file with the following.

```js
import {Inject, Req} from "@tsed/common";
import {Unauthorized} from "@tsed/exceptions";
import {Arg, OnVerify, Protocol} from "@tsed/passport";
import {ExtractJwt, Strategy} from "passport-jwt";
import {UsersService} from "../services/UsersService";

@Protocol({
  name: "jwt",
  useStrategy: Strategy,
  settings: {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
    issuer: "localhost",
    audience: "localhost"
  }
})
export class JwtProtocol implements OnVerify {
  @Inject()
  usersService: UsersService;

  async $onVerify(@Req() req: Req, @Arg(0) jwtPayload: any) {
    const user = this.usersService.findOne({
      id: jwtPayload.sub
    });

    if (!user) {
      throw new Unauthorized("Invalid token");
    }

    req.user = user;

    return user;
  }
}
```
 
The above code snippet configured a passport-jwt protocol using the `@Protocol` decorator; then, it defined the settings for the protocol. In the `JwtProtocol` class, it created an `onVerify` method that checks if the token in a user's request is valid, then updates the user data in the request payload and returns the user.

Next, create a `LocalProtocol` file in the `src/protocols` folder for the JWT local protocol to authenticate users and generate a JWT Token if they are registered.

```js
import { BodyParams, Constant, Inject, Req } from "@tsed/common";
import { Unauthorized } from "@tsed/exceptions";
import { OnVerify, Protocol } from "@tsed/passport";
import * as jwt from "jsonwebtoken";
import { IStrategyOptions, Strategy } from "passport-local";
import { User } from "../models/User";
import { UsersService } from "../services/UsersService";

@Protocol<IStrategyOptions>({
  name: "local",
  useStrategy: Strategy,
  settings: {
    usernameField: "email",
    passwordField: "password"
  }
})
export class LocalProtocol implements OnVerify {
  @Inject()
  usersService: UsersService;

  @Constant("passport.protocols.jwt.settings")
  jwtSettings: any;

  async $onVerify(@Req() request: Req, @BodyParams() credentials: any) {
    const { email, password } = credentials;

    const user = await this.usersService.findOne({ email });

    if (!user) {
      throw new Unauthorized("Wrong credentials");
    }

    if (! await this.usersService.verifyPassword(password, user.email)) {
      throw new Unauthorized("Wrong credentials");
    }

    const token = this.createJwtToken(user);

    user.token = token;
    return user
  }

  createJwtToken(user: User) {
    const { issuer, audience, secretOrKey, maxAge = 3600 } = this.jwtSettings;
    const now = Date.now();

    return jwt.sign(
      {
        iss: issuer,
        aud: audience,
        sub: user._id,
        exp: now + maxAge * 1000,
        iat: now
      },
      secretOrKey
    );
  }
}
```

Create a `.env` file in the project root directory and add a JWT secret.

```
JWT_SECRET=<YOUR SECRET>
```

Next, create an index.ts file in the **src/protocols** folder and export the protocols with the code snippets.

```js
export * from "./JwtProtocol";
export * from "./LocalProtocol";
```

Then import the protocol in the `Server.ts` file to make them available in the application.

```js
...
import "../protocols";
...
```

## Protect the API

Now that you've implemented authentication in the application, let's protect the API.

First, import the `@Authenticate` decorator and `@Security` to authenticate users and secure the endpoints from unauthorized users.

```js
...
import { Authenticate } from "@tsed/passport";
import { Security } from "@tsed/schema";
...
```

Then, add a `login` to the `controllers/rest/UsersController.ts` file with the following code snippet.

```js
@Controller("/auth")
export class AuthController {
  //...
  @Post("/login")
  @Authenticate("local")
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login(@Req("user") user: User, @BodyParams() email: string, @BodyParams() password: string): User {
    user.password = ''
    return user;
  }
  //...
 }
```

Now, update the `getUser` controller to make it protected using the following code snippet.

```js
  @Authenticate("jwt")
  @Security("jwt")
  @Get()
  getUser(@Req("user") user: User): User {
    return user;
  }
```

Your `controllers/rest/UsersController.ts` code should look as follows.

```js
import { Controller, Get, Post, Req, Inject, BodyParams } from "@tsed/common";
import { User } from "../../models/UserModel";
import { UsersService } from "src/services/UsersService";
import { Authenticate } from "@tsed/passport";
import { Security } from "@tsed/schema";

@Controller("/users")
export class AuthController {
  @Inject()
  usersService: UsersService;
  
  @Authenticate("jwt")
  @Security("jwt")
  @Get()
  getUser(@Req("user") user: User): User {
    return user;
  }
  @Post("/signup")
  create(@BodyParams("email") email: string, @BodyParams("password") password: string): Promise<User> {
    return this.usersService.create({
      email, password,
    })
  }

  @Post("/login")
  @Authenticate("local")
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login(@Req("user") user: User, @BodyParams() email: string, @BodyParams() password: string): User {
    user.password = ''
    return user;
  }
}
```

## Testing Your Ts.ED Application
You have successfully implemented JWT authentication in your project and protected your API route. Now let's test things out. To get started, run the project:

```
npm run start
```

Then, launch Postman and create a new user by sending a POST request to the endpoint `localhost:8083/rest/auth/signup`. Add the payload to the request body as follows.

```js
{
  "email":"user1@gmail.com",
  "password":"1234"
}
```

You should get a response as follows.

![Sign Up Route](./sign-up-route.png)

Next, log in a user by sending a POST request to the endpoint `localhost:8083/rest/auth/login` with the same payload.

![Login Route](./login-route.png)

Lastly, get the users by sending a GET request to the endpoint `localhost:8083/rest/auth/signup` with the token in the request headers.

![Get Users](./get-users.png)


## Conclusion
In this tutorial, you've built a Ts.ED API and protected the routes with JSON Web Token (JWT). In detail, you've created a Ts.ED project, connected it to MongoDB, implemented JWT authentication, and created and authenticated CRUD routes in your Ts.ED application.

The code for this tutorial is available [here on Github](https://github.com/icode247/TsED_JWT_Auth). Feel free to clone and extend the features of the application.
