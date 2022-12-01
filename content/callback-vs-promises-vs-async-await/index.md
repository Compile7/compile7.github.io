---
title: "Callback vs. Promises vs. Async/Await"
date: "2022-11-24"
coverImage: callback.jpg
tags:
  - "JavaScript"
  - "Async"
description: "Learn fundamental concepts that JavaScript relies on to handle asynchronous operations. These concepts include Callbacks, Promises, and using Async and Await to handle deferred operations."
author: "Ankit Singh"
prevLabel: Learn Everything About Nginx Logs in 5 Minutes
previous: quick-5-minute-guide-on-nginx-access-and-error-logs
nextLabel: How to Fix Memory Leaks in React
next: how-to-fix-memory-leaks-in-react
---

This blog explains the fundamental concepts that JavaScript relies on to handle asynchronous operations. These concepts include the following to manage deferred operations in JavaScript:

1. Callback functions
2. Promises
3. Async/Await

So, before comparing the three, let's understand synchronous (blocking) and asynchronous (non-blocking).

## Difference Between Sync and Async

To make it easy to understand, let’s take a live example that probably will explain the difference between asynchronous and synchronous. 

Imagine you visit a restaurant, and a waiter comes to a table, takes your order, and gives it to the kitchen. Then they proceed to serve another table while the chef prepares the meal. 

So, the same person can serve many different tables. The table has to wait for the chef to cook one meal before they serve another table. This is what we call asynchronous or non-blocking architecture.

Here the waiter is like a thread allocated to handle requests. So a single thread is used to handle multiple requests. 

*In contrast to non-blocking or asynchronous architecture, you have blocking or synchronous architecture.*

Let's see how that works.

So back to the restaurant example: imagine you go to another restaurant, and a waiter is allocated to you in this restaurant. They take your order and pass it to the kitchen.

Now, they are sitting in the kitchen waiting for the chef to prepare your meal, and this time they are not doing anything else — just waiting and will not take another order from other tables until your meal is ready. This is called synchronous or blocking architecture.

The first restaurant example represents an asynchronous process because you did not have to wait. The waiter takes the order from one table and goes to the following table to take the order.

The second example restaurant represents a synchronous operation because you have to wait until the resource (waiter) can proceed with you. This is the single, most fundamental difference between sync and async processes.

One important thing to keep in mind: the single-threaded event handling systems are usually implemented using an event or message queue.

When a program is being executed synchronously, the thread will wait until the first statement is finished to jump to the second one. Whereas, in asynchronous execution, even if the first one was not completed, the execution will continue.

There are different ways to handle the async code. Those are callbacks, promises, and async/await.

## Callbacks

In JavaScript, functions are objects. So you can pass objects to functions as parameters.

You can also pass functions as parameters to other functions and call them inside the outer functions.

So callback is a function that is passed to another function. When the first function is done, it will run the second function.

Let's take an example of a callback function:

```js
function printString(){
   console.log("Tom"); 
   setTimeout(function()  { console.log("Jacob"); }, 300); 
  console.log("Mark")
}

printString();
```

If that were the sync code, you would have encountered the following output.

```
Tom
Jacob
Mark
```

But as the `setTimeout` is an async function, the output of the above code will be: 

```
Tom
Mark
Jacob
```

There is a built-in method in JavaScript called `setTimeout`, which calls a function or evaluates an expression after a given period (in milliseconds). 

In other words, the message function is being called after something happened (after 3 seconds passed for this example), but not before. So the callback is the function that is passed as the argument to setTimeout.

### Callback as an Arrow Function
If you prefer, you can also write the above same callback function as an ES6 arrow function, which is a newer type of function in JavaScript:

```js
function printString(){
   console.log("Tom"); 
   setTimeout(() =>  { console.log("Jacob"); }, 300); 
  console.log("Mark")
}

printString();

```

The output will be the same as earlier, which is:

```
Tom
Mark
Jacob
```

The problem with callbacks: it creates something called “Callback Hell.” 

You start nesting functions within functions within functions, and it gets tough to read the code. In this situation, promises handle the nested callback in a better way.

## Promises

A Promise in JavaScript is similar to a promise in real life.

When you make a promise in real life, it is a guarantee that you will do something in the future — because promises can only be made for the future.

A promise has two possible outcomes: it will either be kept when the time comes or won’t be.

This is also the same for promises in JavaScript.

When you define a Promise in JavaScript, it will be resolved when the time comes, or it will get rejected. It sounds like the IF condition. But there are huge differences.

A Promise is used to handle the asynchronous result of an operation.

JavaScript is designed to not wait for an asynchronous block of code to execute entirely before other synchronous parts of the code can run.

With Promises, you can defer the execution of a code block until an async request is completed. This way, other operations can keep running without interruption.

### States of Promises

First of all, a Promise is an object. There are three states of the Promise object:

1. Pending: Initial State, before the Promise succeeds or fails
2. Resolved: Completed Promise
3. Rejected: Failed Promise, throws an error

For example, when you request data from the server using a Promise, it will be in pending mode until you receive the data.

If you get the information from the server, the Promise will be resolved successfully. But if you don’t get the information, the Promise will be in the rejected state.

### Creating a Promise

Firstly, use a constructor to create a Promise object. The promise has two parameters, one for success (resolve) and one for failure (reject):

```js
const myPromise = new Promise((resolve, reject) => {  
    // condition
});
```

Let’s create a promise:

```js
const myFirstPromise = new Promise((resolve, reject) => { 
    const condition = true;   
    if(condition) {
         setTimeout(function(){
             resolve("Promise is resolved!"); // fulfilled
        }, 300);
    } else {    
        reject('Promise is rejected!');  
    }
});
```

In the above Promise, if Condition is true, resolve the Promise returning the `Promise is resolved`, else return an error `Promise is rejected`. Now you have created our first Promise. Let's use it.

### Using a Promise

To use the above Promise, use `then()` for resolve and `catch()` for reject. 

```js
myFirstPromise
.then((successMsg) => {
    console.log(successMsg);
})
.catch((errorMsg) => { 
    console.log(errorMsg);
});
```

Let's take this a step further:

```js
const demoPromise= function() {
  myFirstPromise
  .then((successMsg) => {
      console.log("Success:" + successMsg);
  })
  .catch((errorMsg) => { 
      console.log("Error:" + errorMsg);
  })
}

demoPromise();
```

In your created Promise, if Condition is `true`, you call `demoPromise()`, then your console logs read:

```
Success: Promise is resolved!
```

If the promise gets rejected, it will jump to the `catch()` method. And this time, you will see a different message on the console.

```
Error: Promise is rejected!
```

### What is Chaining?

Sometimes you need to call multiple asynchronous requests. And after the first Promise is resolved (or rejected), a new process will start, to which you can attach it directly by a method called chaining.

Create another promise:

```js
const helloPromise  = function() {
  return new Promise(function(resolve, reject) {
    const message = `Hi, How are you!`;

    resolve(message)
  });
}
```

Chain this promise to your earlier `myFirstPromise` operation as follows:

```js
const demoPromise= function() {

  myFirstPromise
  .then(helloPromise)
  .then((successMsg) => {
      console.log("Success:" + successMsg);
  })
  .catch((errorMsg) => { 
      console.log("Error:" + errorMsg);
  })
}

demoPromise();
```

Since your condition is true, the output to your console is:

```
Hi, How are you!
```

Once the `hello` promise is chained with `.then`, subsequent `.then` utilizes data from the previous one.

## Async/Await
Await is syntactic sugar for Promises. It makes your asynchronous code look more like synchronous/procedural code, which is easier for humans to understand.

Syntax of Async and Await:

```js
async function printMyAsync(){
  await printString("one")
  await printString("two")
  await printString("three")
}
```

You can see that you use the `async` keyword for the wrapper function `printMyAsync`.

This lets JavaScript know that you are using async/await syntax and is necessary if you want to use Await.

This means you can’t use Await at the global level. It always needs a wrapper function. Or you can say await is only used with an async function. 

The await keyword is used in an async function to ensure that all Promises returned in the async function are synchronized, i.e., they wait for each other.

Await eliminates callbacks in `.then()` and `.catch()`. Using async and await, async is prepended when returning a promise, and await is prepended when calling a Promise. Try and catch are also used to get the rejection value of an async function.

Let's take an example to understand the Async and Await with your `demoPromise`:

```js
async function demoPromise() {
  try {
    let message = await myFirstPromise;
    let message  = await helloPromise();
    console.log(message);

  }catch((error) => { 
      console.log("Error:" + error.message);
  })
}

// finally, call your async function

(async () => { 
  await myDate();
})();
```

## Conclusion
You understood the concepts of callback, Promise, and Async/Await. And you know how they can work with JavaScript asynchronous requests. Mainly they're used for API requests and event handling.


