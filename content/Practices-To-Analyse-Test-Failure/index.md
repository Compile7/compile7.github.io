---
title: "Practices To Analyse Test Failure"
date: "2020-07-01T16:51:00.000Z"
category: "Mail7"
tags:
  - "QA"
  - "Test Failure"
description: "In today's world of software testing, the role of a QA engineer is not just to create test cases, record failure and notify developers about it. The next step which has become a necessity nowadays is to Analyse the failure The analysis will not only help the QA to catch the"
author: "Shubha Kumari"
---


In today's world of software testing, the role of a QA engineer is not just to create test cases, record failure and notify developers about it. The next step which has become a necessity nowadays is to "**Analyse the failure**"
The analysis will not only help the QA to catch the failure quickly but also help in making all the testing operations smooth. Now let's talk about how it can be achieved.

## **What is test failure analysis?**
 As the name sounds, its a practice to analyze "what went wrong"?????
 
 ![enter image description here](https://i.kym-cdn.com/photos/images/original/001/173/316/86f.gif)
**Application vs. test failures**:-The QA first needs to analyze if the problem is with the "**Software under test**" or with the "**Test**". 

**Root cause**:- Instead of debating between the issue in software or test one should emphasize finding the root cause of the failure so that QA might help the developer to take corrective actions quickly.

**Failure scope**:- If the failure is due to application code then QA needs to analyze how many builds or configurations might get affected due to this? It will be easiest to answer the question if the testing is done on every possible configuration but if not done then the analysis should be initiated to find which part of the application is likely to experience failure.

**Failure significance**:- Now the last question for your failure analysis is how significant the failure is if the issue is with the software? For this QA should check if the failure is worth enough to delay the deployment or it is relatively a low priority issue that can be deferred.
And if the test is failing because of a problem in itself then the analysis should be based on the priority. Whether it is possible to live with it or it needs to be addressed asap.

## Adding efficiency of test failure analysis

Test failure analysis sounds good but Is it required to do a detailed analysis of each failing case???? No...even it is not feasible. 
An individual can consider the following strategies to do the failure analysis every single time the test fails so that the test which needs full analysis and the test which can be ignored can be classified. 

**Auto-restarts**
Sometimes the software results with the same input flicker i.e. running the same test twice will provide different output. That may happen because of a server crash, that kind of weird and unpredictable things happen sometimes. Configuring an automatic restart on the failure is a way to reduce the number of potential failures to be analyzed. By this, the test case which is truly failing and requires a deeper look can be identified. 

**Create failure analysis rulebook**
There should be a consistent or predictable method to analyze or predict the test failure. The consistency should be taken care of in every type of test failure analysis. So there should be an analysis rulebook that lays out a consistent process to analyze the test which needs failure analysis and which do not require. 

**Parallel testing**
Parallel testing has many benefits as it has the ability to assess the probable significance of a test failure quickly. As the process to find the data of failed test cases is comparatively quick.
If you are running thousands of cases and only one or two fails then there are fewer chances of any big failure and they can be verified quickly. On the other hand, if the percentage is higher then 20-30% then there is a chance of major bug in the built which needs to be addressed as soon as possible.

## Conclusion
 *The test fails sometimes but a good catch can be done with the reaction done to the failure and to achieve that there should be a consistent plan to analyze the test failure.*
