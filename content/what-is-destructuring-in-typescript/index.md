---
title: "What is Destructuring in Typescript?"
date: "2022-11-04"
coverImage: destructuring.png
tags:
  - "TypeScript"
  - "Destructuring"
description: "Everything you need to know about Destructuring in TypeScript. How to destructure an object and an array in TypeScript"
author: "Mohammed Modi"
---

The literal meaning of Destructuring is de-structuring i.e., breaking up the structure. Destructuring in typescript is very similar to the concept of destructing in JavaScript.

Destructuring allows one to easily access the data from the cumbersome nested object. 

```typescript
interface Foo {
    Bar: {
       Car: string 
    }
}
```
TypeScript provides a great way to handle this kind of nested data by creating a typed interface. Destructuring is a very convenient way to easily access the data from a such nested object.

## Object Destructuring in TypeScript

To understand Object Destructuring, consider the following use case:

```typescript
interface Person {
    Name: string;
    Id: string;
    City: string;
    State: string;
}

let person:Person = { Name: "John", Id: "john123", City: "NY", State: "US" };
```

In the above example, instead of referencing each property using `person`. and so on, you can simply destructure in the following way:

```typescript
const = { Name, Id, City, State } = person;
console.log(Name, Id, City, State) // John john123 NY US
```

Additionally, if you consider the nested example above, you can access the value of `Car` as follows:

```typescript
const fooObj: Foo = { Bar: { Car: "abc123" } }
const { Bar: { Car } } = fooObj;
console.log(Car) // abc123
```

### Object Destructuring with the `spread` operator

In the `Person` interface if you only need to `Name`, you can use the following syntax.

```typescript
const { Name, ...rest } = person
console.log(name, rest) // John { Id: "john123", City: "NY", State: "US" }
```

One of the common use cases is to ignore one value from the object. It can be easily achieved using the `spread` operator. 

```typescript
const { Id, ...personDetails} = person
console.log(personDetails) // { Name: "John", City: "NY", State: "US" }
```

## Array Destructuring in TypeScript

To destructure an array in TypeScript, you use square brackets `[]` to store the variable name.

```typescript
const [var1, var2, ...] = arrayName
```

Another use case of array destructuring would be using variables to assign the values of an array, as follows.

```typescript
const colorArray: string[] = ["red", "yellow", "blue", "green", "white", "black"]

const [rColor, yColor ] = colorArray
console.log(rColor, yColor) // red yellow

```

In the above example, if you want to ignore certain elements in an array, you can do it as follows:

```typescript

const [rColor, , bColor ] = colorArray
console.log(rColor, bColor) // red blue

```

## Swapping Variables with Destructing

This is the common interview question generally asked, "How to swap two variable values without using a third variable?". The answer to this is using destructuring.

```typescript

let a:string = "one";
let b:string = "two";
[a, b] = [b, a]
console.log(a, b) // two one

```

## Destructuring in Functional Arguments

There is a use case where you need to destructure the typed functional argument, which you can do as follows:

```typescript
interface ParseResult{
    data: string;
}
const testder = ({ data }: ParseResult) =>{
    console.log(data); // test
}
const para:ParseResult= {
    data:"test"
}
testder(para)
```

## Destructuring Return Types

There might be a case where you need to destructure the return types. You do this as follows:

```typescript
function print(): [number, string] {
    return [1,'my']
}

const [num, my] = print();
console.log(num, my) // 1 my
```

## Wrapping Up

Destructuring allows making your code more readable and cleaner compared to the older fashion. Array destructing allows you to use the elements of an array as a tuple. 

So what next? Try practising and take your destructuring abilities to next level.