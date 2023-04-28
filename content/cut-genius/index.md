---
title: "Hello World, from Cut Genius"
date: "2023-04-27"
coverImage: cut-genius.jpg
tags:
  - "Open Source"
description: "Meet Cut Genius: an open-source cutting stock optimization web app for DIY enthusiasts & manufacturers. Save time and materials & join our growing community!"
author: "Nathan Nguyen"
prevLabel: 
previous: 
nextLabel: How to Build Progressive Web Apps
next: how-to-create-progressive-web-apps
---

In a way, open source is a very distinct and beautiful feature of the tech industry. It takes the power to innovate and distributes it evenly among every engineer so that instead of waiting for big, developed industry leaders to be in charge of technology breakthroughs, everyone can contribute in their own way, at their own pace.

Today, we would like to step forth and contribute our drop in the big ocean that is the open source community. And we want to say, "Hello World, from Cut Genius".

## What is Cut Genius?

We are a web application aiming to help with the cutting stock optimization problem.

In manufacturing, pieces of raw materials usually come in large slates and need to be cut down to useful sizes. Optimizing this cutting process involves fitting most pieces of the final product onto the stock, thus saving time and material.

And with that in mind, we set out to start building.

We took the first step with a tech stack we were confident about: good old React frontend and Express backend on Node.js. We are starting lightweight, and both React and Express play nicely into this. We only add what we use, keeping the infrastructure minimalistic, and the smooth frontend experience that React is known for is a huge boon for the end user. It is also a tech stack that the team has had experience with, ensuring that we hit the ground running with development.

To keep the UI experience smooth and allow multiple optimizing tasks to be executed simultaneously, we elected to implement a Socket.IO connection between the frontend and backend. This allows us the flexibility to process requests from the frontend asynchronously, which will help future-proofing the app as we scale up.

Moving onto user flow, our frontend is responsible for taking user input. This usually consists of the dimensions of the stock, the dimensions of the final pieces, as well as the count/quantities. We also seek to implement a canvas to visualize the cutting result returned from the backend. For this, we elect to use Fabric.js.

The backend will be responsible for taking input and calculating the optimized cut. As it is, there are several algorithms for cutting stocks, falling into different categories depending on the number of dimensions we take into account when making the cut.

For cutting strips of material, only one dimension is concerned. Cutting geometric shapes requires considering two dimensions, width and length, and cutting solid objects will involve all three dimensions. 

For a minimum viable product, we focus on completing a robust algorithm for one-dimension cutting and ensuring it properly renders in the frontend canvas. Thus, our future goals include adding algorithms of higher dimensions and working out the rendering details for each of them.

## Conclusion
All in all that has been our progress so far with the project. We look forward to putting some final touches on the MVP and having it deployed so we can share an initial app version with the world. We are also planning our next steps and are excited to continue developing and improving it.

We want to extend an invitation to you, our reader, to give the app a try. If you are into woodworking, fabrication, or anything DIY, we hope you find the app helpful in your workflow. And any feedback you may have would be invaluable to us!

Furthermore, in the spirit of open source development, we would love to welcome contributions to the project. Please reach out if you got a question, and we look forward to any pull requests that come our way!

You can take a look at the application at: https://cutgenius.compile7.org

Or, contribute to the project here: https://github.com/Compile7/piece-cutting-optimizer 

Thank you for reading, and happy coding.
