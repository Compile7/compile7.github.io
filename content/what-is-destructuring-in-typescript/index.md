---
title: "What is Destructuring in Typescript"
date: "2022-11-01"
tags:
  - "TypeScript"
  - "Destructuring"
description: "Everything you need to know about Destructuring in typescript, How destructring the object and array can be done using typescript"
author: "Mohammed Modi"
---

# Destructuring in Typescript

The literal meaning of Destructuring is de-structuring i.e breaking up the structure. Destructuring in typescript is very similar to the concept of destructing in javascript.

Destructuring allows one to easily access the data from the cumbersome nested object. 

```typescript
interface Foo {
    Bar: {
       Car: string 
    }
}
```
TypeScript provides a great way to handle this kind of nested data by creating a typed interface, destructuring is a very convenient way to easily access the data from a such nested object.

## Object Destructuring in Typescript

To understand the Object Descturing let us consider the below use case

```typescript
interface Person {
    Name: string;
    Id: string;
    City: string;
    State: string;
}

let person:Person = { Name: "John", Id: "john123", City: "NY", State: "US" };
```

So in the above example instead of referencing each property using `person.` and so on we can simply destructure in the following way

```typescript
const = { Name, Id, City, State } = person;
console.log(Name, Id, City, State) // John john123 NY US
```

Additionally, if we consider the above-nested example we can access the value of `Car` something like this

```typescript
const fooObj: Foo = { Bar: { Car: "abc123" } }
const { Bar: { Car } } = fooObj;
console.log(Car) // abc123
```

### Object Destructuring with the `spread` operator

In the `Person` interface if we only need to `Name` we can use the below syntax to do so

```typescript
const { Name, ...rest } = person
console.log(name, rest) // John { Id: "john123", City: "NY", State: "US" }
```

One of the common use cases for the rest operator is to ignore one value from the object. Which can be easily achieved using the `spread` operator. 

```typescript
const { Id, ...personDetails} = person
console.log(personDetails) // { Name: "John", City: "NY", State: "US" }
```

## Array Destructuring in TypeScript

To destructure the array in typescript we use square brackets `[]` to store the variable name.

```typescript
const [var1, var2, ...] = arrayName
```

Another use case of array destructuring would be using variables to assing the values of an array, like the below example

```typescript
const colorArray: string[] = ["red", "yellow", "blue", "green", "white", "black"]

const [rColor, yColor ] = colorArray
console.log(rColor, yColor) // red yellow

```

In the above example if you want to ignore certain elements in an array you can do it this way:

```typescript

const [rColor, , bColor ] = colorArray
console.log(rColor, bColor) // red blue

```

Swapping Variables with Destructing

This is the common interview question generally asked, "How to swap two variable values without using a third variable". The answer to this is using destructuring

```typescript

let a:string = "one";
let b:string = "two";
[a, b] = [b, a]
console.log(a, b) // two one

```

## Destructuring in functional arguments

There is a use case where we need to destructure the typed functional argument which can be done using the below example:

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

## Destructuring return types

There might a case where one needs to destructure the return types which can be done using the below example:

```typescript
function print(): [number, string] {
    return [1,'my']
}

const [num, my] = print();
console.log(num, my) // 1 my
```

## Wrapping Up

Destructuring will allow you to make your code more readable and cleaner compare to the older fashion. Array destructing allows you to use the elements of an array as a tuple. 

So what next? Try practising and take your destructuring abilities to next level.