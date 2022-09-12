---
title: "Code Refactoring A Technique To Clean Up The Code"
date: "2020-06-26T16:51:00.000Z"
category: "Mail7"
tags:
  - "Refactoring"
  - "Clean-up"
description: "
What do we mean for Code Refactoring in terms of QA Engineer? Do we really think, this is only for Software Developer? How and When it should be done in our testing cycle? 
These questions will arise in our mind definitely when we think about Code Refactoring or Re-Structuring of working test automation script..."
author: "Himanshi Sharma"
---


What do we mean for Code Refactoring in terms of QA Engineer? Do we really think, this is only for Software Developer? How and When it should be done in our testing cycle? 
These questions will arise in our mind definitely when we think about Code Refactoring or Re-Structuring of working test automation script. 
My concept of this method is quite similar to Martin Fowler's: changing code so that functionality does not change, but the readability, design, structure, or maintenance of the code is better.
Now let's have a deeper look into this topic with understanding to get answers of what, why, and how to use Code Refactoring.
 

## What is Code Refactoring?

Code Refactoring is the process of simplifying and clarifying the design of existing code, without changing its behavior. The logic behind this concept is to transform the over-complicated and inefficient code to a more efficient, preferably simpler, easier, understandable code.
Nowadays, it is highly required in IT companies that work on Agile Software Development and become a usual practice in everyday works.

## Why we need Code Refactoring?
We have heard many times in our sprint planning/grooming meetings about code reformation/refactoring/updations from the developer when any addition comes in an existing feature. Sometimes they say it is required to remove unwanted code or dependencies to make application bit faster and lighter. 
Yes, you are on the right track of your mind. When we consider our test automation scripts to add/upgrade more test cases, to reduce test execution time, to remove duplicate codes, to change dependencies, here we also work on the path of Code Refactoring. 

Going back and cleaning up the current code before adding in new test script into the same code, will not only improve the quality of the automation framework itself, it will make it easier for future QA to build on the original code. Code Refactoring also reduces redundancy in code, simplifies the logic, maintains the readability and reusability of code, or cuts down on unnecessary loops, all this on a code that is already deployed and used in production.

## How to perform Code Refactoring?

Martin Fowler and Kent Beck wrote the book on the subject of refactoring called “[Refactoring: Improving the Design of Existing Code](https://martinfowler.com/books/refactoring.html)”. I highly recommend to read this book, it is definitely worth it! The book illustrates the process of refactoring and spends most of its time to explaining how to do the various refactorings – the behavior preserving transformations. In this book, seventy refactorings and code refactoring techniques are described in detail with mechanics of how to do them safely, and a simple example.

Let's have a closer look at some techniques which commonly used and easy to learn. Following are the types of code refactoring:

**1. Preparatory Refactoring:** There are multiple aspects that testers use in their code to make the feature much effortless while creating a new application/automation scripts is called Preparatory Refactoring.
Usually adding new test code for upcoming/upgraded feature with existing structured code is hard to merge so with the help of this feature, first, we can refactor the structure of the existing code that makes easier to add a new feature.

**2.** **Red-Green Refactoring:** This most popular technique helps the testers to build a test suite, write codes and modify their code in a short period of time. This type of refactoring is based on Test-Driven Development where testers first write tests and then use these tests to modify and develop software applications. It can be segregated into three phases:

-   **Red:**  It's the first stage of Red Green Factor where Testers stop and think what needs to be developed if expectations fulfill then the test will pass.  

-   **Green:** Second phase of where Tester will implement code and get the development to be pass at the basic testing level.  So here, testers need to find out the optional solution without further modification in the existing one.

-   **Refactor:** At this stage, testers implement improvements to improve the code with better quality and efficiency.  
  
**3. Composing Methods Refactoring:** Composing Methods Refactoring used in order the code duplicacy, this process is done by using Extraction and inline method.  
Extraction method, under this method the code is fragmented into small chunks. Extraction method also involves class, interface, and local variables.  
Inline, under this method it reduces the number of methods by simplifying the code.  
  
**4. Simplifying Conditional Expressions Refactoring:** When code gets old it becomes more complicated that results in more complicacy with the logic over time. So, simplifying conditional expressions involves refining the interaction between classes. By introducing new parameters, adding and removing the parameters with explicit methods that help testers to understand the logic better.

## Conclusion :
Here, if we think about Code Refactoring for testing perspective, we have a better picture of this term and its benefits. In simple words, when we have a better and well-organized code, it would be a stressless and effective approach to increase productivity along with a better product that we can think.  