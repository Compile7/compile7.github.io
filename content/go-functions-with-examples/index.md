---
title: "Go Functions Explained with Examples"
date: "2022-11-09"
coverImage: go-functions-explained.png
tags:
  - "Go"
  - "Functions"
description: "A brief introduction to functions in Go and how you can use them in your Go programs."
author: "Vijay Singh Shekhawat"
---

## The Basics of Go Functions
Functions are a block of code or statements that allow the user to reuse code, save time, and keep the program readable. So basically, a function is a set of statements that performs a specific task and provides the result to the callee. A function can also execute some action without providing anything back.

## Advantages of Using a Function in a Program

- Information hiding
- Minimizing code duplication
- Dividing up complex logic into smaller components
- Improve the overall code quality & clarity
- Improve the reusability of code

## How to Declare Your Function

To define a function in Go, use the `func` keyword followed by a name and parameters. The code used to perform its main function goes within curly brackets.

```go
func name_of_Function(Parameters-list)(Return_type){
// function body.....
}
```

In this case, let's define a function named `hello()`. It will print the 
“Hello, World“

```go
func hello() {

fmt.Println("Hello, World!")

}
```

**Output:**

```
Hello, World!
```

## Go Function with Parameters
So far, we have looked at functions with empty parentheses that don't take arguments, but we can define parameters in function definitions within their parentheses. In Go, you must specify the [data type](https://www.digitalocean.com/community/tutorials/understanding-data-types-in-go) for each parameter.

```go
package main

import "fmt"

func main() {

hello("Sam")

}

func hello(name string) {

fmt.Println("Hello, " , name)

}
```
**Output**

```go
Hello, Sam!
```

## Go Function with Return Values
```go
package main

import "fmt"

func main() {

total := sum(5+8)

fmt.Printf("Total amount is : %d", total)

}

func sum(a1 int, a2 int ) (total int){

return a1+a2

}
```
**Output**
```
Total amount is 13
```

## Go Anonymous Functions
An anonymous function, also known as a nameless function, is a single-expression function that doesn't require a name. It is often seen in languages like JavaScript and Lua, along with Go.

```go
package main
import "fmt"
func main() {
    // Anonymous function
   func(){
      fmt.Println("Welcome! to Compile7")
  }()
}
```
**Output**
```go
Welcome! to Compile7
```

## Naming Convention Rules for Go Functions

- Function name can’t start with a number
- Function name should start with a letter
- Function name shouldn’t contain spaces
- Every word after the first in a name that has additional words should be capitalized — e.g., calNumber() or printLogs()
- If you want to export your functions in other golang packages, then the function name should start with a capital letter — e.g., GlobelFuction(). When a function name begins with a lowercase letter, then function scope only applies inside the same package.
- Names of functions are case-sensitive in Go (number, Number, and NUMBER are three different variables)

## Variables within Functions and How they Differ from Variables Outside the Function Scope
**A variable defined in the function is called a local variable. The scope of those variables is applicable only within their function, which means they only exist within their function.** These variables can be accessed by the nested code blocks inside a function. These variables don’t exist after the function's execution is over. The variables declared outside the functions are called a **global variable**. Global variables can be used by the other functions throughout the package.

## Conclusion
Functions are used for arranging logic into maintainable parts; they are pieces of code that help to make your code more modular and reusable. They allow for reusability, which helps to reduce the workload considerably. A function takes some data and processes it according to the types given in its declaration.
