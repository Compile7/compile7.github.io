---
title: "Introduction to Go Environment Variables"
date: "2022-12-06"
coverImage: goenv.png
tags:
  - "Go"
description: "Learn about environment variables and different ways to use them in your Golang applications."
author: "Puneet Singh"
nextLabel: How to Deploy a React App Using PM2 and Serve
next: react-app-deployment
---

## Before You Get Started
This tutorial assumes you have the following:

* A basic understanding of Golang
* Latest Golang version installed in your system
* A few minutes of your time

In this tutorial, you'll learn about environment variables and why to use them. And you'll access them in a Go application using inbuilt and third-party packages.

## What are Environment Variables?
Environment variables are key-value pairs on a system-wide level, and running processes can access them.

These are often used to make the same program behave differently in different deployment environments like PROD, DEV, or TEST.

Storing configuration in the environment is one of the principles of a twelve-factor app. It enables applications to be portable.

## Why Should You Use Environment Variables?

- If you are using sensitive information in the code, then all the unauthorized users who have access to the code will access the sensitive data. You might not want that.

- If you use a code versioning tool like Git, you may push your database credentials with the code. And it will become public.

- If you manage variables in one place, in case of any changes, you don't have to change them in all the places in the application code.
 
- You can manage multiple deployment environments like PROD, DEV, or TEST. Environment variables are easy to change between deploys without changing the application code.

> Never forget to include your environment variable files in `.gitignore`

## Inbuilt OS Package

You don't need any external package to access the environment variables in Golang. 

You can access environmental variables with the standard `os` package. The following is a list of functions related to environment variables and their uses.

> Note: [Click here for an overview of Go Functions](https://compile7.org/decompile/go-functions-with-examples/)


- `os.Setenv()` sets an environment value.

- `os.Getenv()` gets the value of the environment variable named by the key.

- `os.Unsetenv()` deletes a single environment value named by the key. If you try to get that environment value using `os.Getenv()`, it will return an empty value.

- `os.ExpandEnv` replaces `${var}` or `$var` in the string as per the values of environment variables. If an environment variable is not present, an empty string will replace it.

- `os.LookupEnv()` gets the value environment variable named by the key. If the variable is not present in the system, the returned value will be empty, and the boolean will be false. Otherwise, it returns the value (which can be empty), and the boolean is true.

> `os.Getenv()` will return an empty string if the environment variable is not present. To distinguish between an empty value and an unset value, use `LookupEnv`.

Let's use all the above functions in your code. Create a `main.go` file in an empty folder.

```go
package main

import (
  "fmt"
  "os"
)

func main() {
  // Set Environment Variables
  os.Setenv("SITE_TITLE", "Test Site")
  os.Setenv("DB_HOST", "localhost")
  os.Setenv("DB_PORT", "27017")
  os.Setenv("DB_USERNAME", "admin")
  os.Setenv("DB_PASSWORD", "password")
  os.Setenv("DB_NAME", "testdb")

  // Get the value of an Environment Variable
  host := os.Getenv("SITE_TITLE")
  port := os.Getenv("DB_HOST")
  fmt.Printf("Site Title: %s, Host: %s\n", host, port)

  // Unset an Environment Variable
  os.Unsetenv("SITE_TITLE")
  fmt.Printf("After unset, Site Title: %s\n", os.Getenv("SITE_TITLE"))

  //Checking whether an environment variable is present or not.
  redisHost, ok := os.LookupEnv("REDIS_HOST")
  if !ok {
    fmt.Println("REDIS_HOST is not present")
  } else {
    fmt.Printf("Redis Host: %s\n", redisHost)
  }

  // Expand a string containing environment variables in the form of $var or ${var}
  dbURL := os.ExpandEnv("mongodb://${DB_USERNAME}:${DB_PASSWORD}@$DB_HOST:$DB_PORT/$DB_NAME")
  fmt.Println("DB URL: ", dbURL)
}
```

The following is the output when you run `go run main.go` in your terminal:

```go
go run main.go

//output
Site Title: Test Site, Host: localhost
After unset, Site Title: 27017
REDIS_HOST is not present
DB URL:  mongodb://admin:password@localhost:27017/testdb
```

There are two more functions, `os.Clearenv` and `os.Environ()`. Let's also use them in a separate program.

- `os.Clearenv` deletes all environment variables. It can be helpful to clean up the environment for tests.

- `os.Environ()` returns a slice of the string containing all the environment variables in the form of `key=value`.


```go
package main

import (
  "fmt"
  "os"
  "strings"
)

func main() {

  // Environ returns a slice of a string containing all the environment variables in the form of key=value.
  for _, env := range os.Environ() {
    // env is
    envPair := strings.SplitN(env, "=", 2)
    key := envPair[0]
    value := envPair[1]

    fmt.Printf("%s : %s\n", key, value)
  }

  // Delete all environment variables
  os.Clearenv()

  fmt.Println("Number of environment variables: ", len(os.Environ()))
}
```

The above function will list all the environment variables available in the system, including `NAME` and `DB_HOST`.

Once you run `os.Clearenv()`, it will clear all the environment variables for the running process.

## `godotenv` Package

The Ruby `dotenv` project inspires [GoDotEnv](https://github.com/joho/godotenv) package; it loads the environment variables from a `.env` file

Let's create a `.env` file in which you will have all the configurations.

```go
# .env file
# This is a sample config file

SITE_TITLE=Test Site 

DB_HOST=localhost
DB_PORT=27017
DB_USERNAME=admin
DB_PASSWORD=password
DB_NAME=testdb
```

Then in the `main.go` file, you will use `godotenv` to load the environment variables.

> You can load multiple `.env` files simultaneously. `godotenv` also supports YAML.

```go
// main.go
package main

import (
  "fmt"
  "log"
  "os"

  "github.com/joho/godotenv"
)

func main() {

  // load .env file from a given path
  // we keep it empty; it will load .env from the current directory
  err := godotenv.Load(".env")

  if err != nil {
    log.Fatalf("Error loading .env file")
  }

  // getting env variables SITE_TITLE and DB_HOST
  siteTitle := os.Getenv("SITE_TITLE")
  dbHost := os.Getenv("DB_HOST")

  fmt.Printf("godotenv : %s = %s \n", "Site Title", siteTitle)
  fmt.Printf("godotenv : %s = %s \n", "DB Host", dbHost)
}
```

Open the terminal and run the `main.go` as follows:

```go
go run main.go

// output
godotenv : Site Title = Test Site
godotenv : DB Host = localhost
```

## Viper Package

> Viper is a complete configuration solution for Go applications, including twelve-factor apps. It is designed to work within an application and can handle all configuration needs and formats.

[Viper](https://github.com/spf13/viper) supports many file formats to load environment variables — e.g., reading from JSON, TOML, YAML, HCL, envfile, and Java properties config files.

So in this example, you'll look at how to load environment variables from a YAML file.

> YAML is a human-readable data-serialization language. It is commonly used for configuration files and in applications where data is being stored or transmitted.

Create your `config.yaml` and `main.go` files in an empty folder. 

```yaml
# config.yaml
SITE:
  TITLE: Test Site

DB:
  HOST: "localhost"
  PORT: "27017"
  USERNAME: "admin"
  PASSWORD: "password"
  NAME: "testdb"
```

In the below code, you'll use Viper to load environment variables from a `config.yaml`.

You can load the config file from any path you want.

You can also set the default values for any environment variable if any environment variable is not available in the config file.

```go
// main.go
package main

import (
  "fmt"
  "log"
  "os"

  "github.com/spf13/viper"
)

func main() {

  // Set the file name of the configurations file
  viper.SetConfigName("config")

  // Set the path to look for the configurations file
  viper.AddConfigPath(".")

  // Enable VIPER to read Environment Variables
  viper.AutomaticEnv()

  viper.SetConfigType("yml")

  if err := viper.ReadInConfig(); err != nil {
    fmt.Printf("Error reading config file, %s", err)
  }

  // Set undefined variables
  viper.SetDefault("DB.HOST", "127.0.0.1")

  // getting env variables DB.PORT
  // viper.Get() returns an empty interface{}
  // so we have to do the type assertion to get the value
  DBPort, ok := viper.Get("DB.PORT").(string)

  // if type assert is not valid, it will throw an error
  if !ok {
    log.Fatalf("Invalid type assertion")
  }

  fmt.Printf("viper : %s = %s \n", "Database Port", DBPort)
}
```

Open the terminal and run the `main.go` as follows:

```go
go run main.go

// output
viper : Database Port = 27017
```

## Conclusion

Using environment variables is an excellent way to handle configuration in your application. It provides easy configuration, better security, multiple deployment environments, and fewer production mistakes.

Now you can manage environment variables in your go application. 

You can [find the complete code used in this tutorial on Github](https://github.com/LoginRadius/engineering-blog-samples/tree/master/GoLang/EnvironmentVariables)



