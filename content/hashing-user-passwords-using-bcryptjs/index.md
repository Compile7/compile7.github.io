---
title: "How to Do Password Hashing in Node.js with Bcrypt"
date: "2022-12-02"
coverImage: password-hashing-with-bcrypt.png
tags:
  - "Node.js"
  - "Bcrypt"
description: "Storing plain text passwords is a disastrous security practice. You can overcome it with password hashing, which you'll learn in this tutorial for your Node.js projects."
author: "Hridayesh Sharma"
---

Imagine a scenario where you store all the user passwords in plain text in your database, i.e., passwords are stored in the database without any modification.

Now, a hacker gets access to your database and can see any of the user credentials stored in the database and do whatever they want. Oops! All your user data is compromised.

What if you could prevent this?

What if there was a way to prevent a hacker from accessing your user passwords even if your database is compromised?

Yes, there is a way called *Password Hashing*.

## What is Password Hashing?
Hashing is a one-way ticket to data encryption. Hashing performs a one-way transformation on a password, turning the password into another String called the hashed password.

Hashing is called one-way because getting the original text from a hash is practically impossible.

## Prerequisites

Before moving on, you shall have a fair understanding of the following:

- Working with Node Ecosystem
- A brief idea about MongoDB
- Some JavaScript knowledge

Make sure you have the following installed on your system to move forward with the tutorial:

- [Node.js](https://nodejs.org/en/) and [npm](https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/)
- [MongoDB](https://mongodb.com)


## How to Implement Passwords Hashing in a Node Application

**Step 1**: Create a new directory and initialize a new project.

```bash
  npm init -y
```

**Step 2**: Install some of the project dependencies.

Let's use `expressjs` to create a new server and `mongoose` to interact with MongoDB in your Node application. 

```bash
  npm install --save mongoose express
```

**Step 3**: Let's write your server using `express` and connect it to MongoDB using `mongoose`.

  Create a new file called `server.js` in the project's root directory.
  
  `server.js`

  ```js
    const express = require('express');
    const app = express();
    const mongoose = require('mongoose');
    // to parse JSON data from the request object
    app.use(express.json())


    mongoose.connect("mongodb://localhost:27010/demo", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(() => console.log("Connected to DB"))
      .catch (console.error);

    app.listen(3000, () => console.log("Running on port 3000"))
  ```

Run your server using `node server.js`. This is a simple server running on port 3000. Here, you are using express's JSON middleware to parse form data.

> Note: To see updated changes after every step, you need to run your server multiple times or use a package like [nodemon](https://www.npmjs.com/package/nodemon), which will watch for file changes.

**Step 4** Now, let's create our user schema.
  
  Create a file called `userModel.js` in the project's root directory, as follows.
  
  `userModel.js`
  ```js
    const mongoose = require('mongoose');

    const UserSchema = new mongoose.Schema({
      email: String,
      password: String,
    })

    module.exports = mongoose.model('user', UserSchema)
  ```

  The above code snippet created a simple user model with email and password and exported it. It is not using any validations here, as this is not a tutorial on [`mongoose`](https://mongoosejs.com/).
  
  You must use data validations in an actual application.
  
**Step 5** Create your routes for login and signup.

  - Install the bcrypt module in your project: `npm i --save bcrypt`.
  - Create a separate file called `userRoutes.js` in the project's root as follows.
  
  `userRoutes.js`
  ```js
    const bcrypt = require("bcrypt");
    const express = require("express");
    const User = require("./userModel");
    const router = express.Router();
    // signup route
    router.post("/signup", async (req, res) => {
      const body = req.body;

      if (!(body.email && body.password)) {
        return res.status(400).send({ error: "Data not formatted properly" });
      }

      // creating a new mongoose doc from user data
      const user = new User(body);
      // generate salt to hash password
      const salt = await bcrypt.genSalt(10);
      // now we set the user password to hashed password
      user.password = await bcrypt.hash(user.password, salt);
      user.save().then((doc) => res.status(201).send(doc));
    });

    // login route
    router.post("/login", async (req, res) => {
      const body = req.body;
      const user = await User.findOne({ email: body.email });
      if (user) {
        // check the user password with the hashed password stored in the database
        const validPassword = await bcrypt.compare(body.password, user.password);
        if (validPassword) {
          res.status(200).json({ message: "Valid password" });
        } else {
          res.status(400).json({ error: "Invalid Password" });
        }
      } else {
        res.status(401).json({ error: "User does not exist" });
      }
    });

    module.exports = router;
  ```
  
  Here, the code snippet used express Router to create your routes in a separate file to keep your `server.js` as clean as possible.

You will use `bcrypt` to hash the user password and store them in the database.

This way, you are not storing the plain text passwords in the database. Even if someone can access a hashed password, they won't be able to log in.

Import the user routes in the `server.js` as follows.
  
  `server.js`

  ```js
    const express = require("express");
    const mongoose = require("mongoose");
    const userRoutes = require("./userRoutes");

    const app = express();

    mongoose
      .connect("mongodb://localhost:27017/demo", { useNewUrlParser: true })
      .then((_) => console.log("Connected to DB"))
      .catch((err) => console.error("error", err));

    app.use(express.json());
    // here, we want express to use userRoutes for all requests coming at /auth like /auth/login
    app.use("/auth", userRoutes);

    app.listen(3000, () => console.log("Running on port 3000"));
  ```

You want express to use our `userRoutes` for all incoming requests at `/auth/something`, like `/auth/login` and `/auth/signup`.

You finally have a node server up and running with hashing the passwords instead of storing them in plain text with everything in place.

You have created two routes, one for login and one for signup.

You use hashing while storing the user passwords using the `bcrypt.hash` method.

And later on, you can compare the original passwords with a hashed password using `bcrypt.comapre` when the user logs in.

**Step 6**: Let's test your server now.

Now, you will test the server using [Postman](https://www.postman.com/).

- Creating a new user

  - Create a new user with a random email and password in the request body by sending a `post` request at `http://localhost:3000/auth/signup`.
  
  Notice that you will get the hashed password in the response. You can also check in the database locally how the password is stored. You've named your database to be `demo` here.

 - Log in using the above credentials.

   - Similarly, send a post request at `http://localhost:3000/auth/login`, and you will get a message as a valid password in the response.


### Conclusion

Finally, you have created a primary node server and implemented password hashing to prevent an attacker from accessing original passwords.

Hashing user passwords is essential, as user data is crucial for any organization. You can [read more about hashing and encryption here](https://blog.loginradius.com/engineering/encryption-and-hashing/).

You can [find the complete code for this tutorial on Github](https://github.com/LoginRadius/engineering-blog-samples/tree/master/NodeJs/BcryptPasswordHashing)
