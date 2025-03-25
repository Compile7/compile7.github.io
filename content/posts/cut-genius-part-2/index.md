---
title: "Cut Genius #2: Deployment Time with Onrender"
date: "2023-06-30"
coverImage: cut-genius-onrender.jpg
tags:
  - "Open Source"
  - "Onrender"
description: "Learn how we have utilized Onrender to deploy Cut Genius without cost."
author: "Nathan Nguyen"
prevLabel: Hello World, from Cut Genius 
previous: cut-genius
nextLabel: How LRBuddy VSCode Extension Helps Streamline CIAM Processes
next: lrbuddy-vscode-extention
---

Hello World,

It has been several weeks since the last time [we talked about Cut Genius](https://compile7.org/decompile/cut-genius/), and I am excited to share what we have been up to with Cut Genius.

After delivering the core minimal viable product (MVP), the team has been hard at work again, currently focusing on expanding the app's functionality beyond the 1-dimensional algorithm.

After all, the stock cutting problem comes in any shape and size, in 1, 2, and 3 dimensions (maybe even 4 at some point, who knows!). So, we would like to offer as many algorithms to address these problems as possible.

I was pumped to write about our progress so far, but the team has put forth another idea for this blog that I think is worth diving into. That is, we should talk a bit about our deployment process. 

As part of our MVP delivery, we have opted to host the project at https://cutgenius.compile7.org, so everyone can try it out and have a feel for it themselves.

As you may know, the project is separated into a frontend React and a backend Express component. And we planned to build on this configuration with socket.io to support a certain async workflow in the future.

Now, hosting a React project is no problem. There are multiple free and paid solutions available. With some of them, you can spin up in minutes.

The backend component, however, is a different story, especially if you are starting out looking for a free solution.

For the MVP, our 1D algorithm is quite simple, and we expect a low number of requests hitting the backend. After all, the product is just getting off the ground, and we need a stable environment to do testing.

Once the service is being discovered more, we could always look into upgrading to more serious hosting options.

That said, finding a free hosting solution for web servers is still not straightforward.

When looking at web hosting at large, Netlify is quite often brought up. However, they specialize in hosting static web pages and do not play very nicely with servers that need to be up and listening to requests constantly.

Netlify offers a serverless function that supports running Node.js code, but it is quite proprietary and needs to be set up with their specific format using Netlify CLI.

Other services that might offer Node.js hosting have restrictions on request timeout, number of requests, etc. that are sometimes quite hard to navigate.

Enter render.com.

Our team stumbled upon render.com, or Onrender, as part of our research into hosting. Upon first impression, the service seems exactly what we are looking for. And it is super easy to get started.

Once you sign up for an account and head to the dashboard, you see the “New” button to spin up a new deployment, and voila, the option for web service is there, among others.

Onrender allows you to link a Github or Gitlab account and deploy directly from one of your repositories. You can also specify an alternate root directory, meaning if you want to package multiple apps in the same repository and deploy each individually, you can do so with Onrender.

Alright, so what’s next?

Surely the deployment configuration process is more elaborate than just plugging in a repo?

At this point, Onrender would scan the repository and detect what type of application is being deployed. Once it detects Node.js, these fields need your attention as follows.

Essentially, you provide two commands: One for fetching all dependencies using your favorite package manager and the other to run the app.

That’s it? That’s it.

It truly is as simple as spinning up an application instance on your local machine.

Once the configuration steps are done, Onrender will provide you with an URL where the application is listening for requests, and you can start calling it from anywhere on the internet. The whole process takes anywhere from 5 to 10 minutes; best of all, it’s free!

Currently, the team at Cut Genius is utilizing Onrender for both our production and development instances of the app, and we have nothing to complain about. Everything works as it should, and we are back to focusing on further development.

We are excited to share this quick tip with you as we found it quite neat for those cases where your project requires deploying both a frontend and a backend separately, which is quite common today.

Hope you find it useful, and happy coding!