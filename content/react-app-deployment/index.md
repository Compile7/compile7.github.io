---
title: "How to Deploy a React App Using PM2 and Serve"
date: "2022-12-06"
coverImage: deploy_react_app.png
tags:
  - "React"
  - "PM2"
description: "Are you a React developer? This tutorial teaches how to deploy your React apps with pm2 and serve."
author: "Aman Agrawal"
nextLabel: How to Do Password Hashing in Node.js with Bcrypt
next: hashing-user-passwords-using-bcryptjs
---

Yes, you have learned React, and now, you can develop a full-fledged frontend application.

The `create-react-app` helps you to set up and run a React project, including code transpiling, basic linting, testing, and build systems.

In short, you can start writing React code with minimal preparation. Once you develop your application, it is time to deploy it on a server. But you are stuck and will seek help from your backend or DevOps mates.

Wait! Being a frontend developer, it seems to be difficult, but deploying your application on a server is relatively more straightforward than [writing state management in Redux](https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers).

In this tutorial, you will learn how to deploy a React application on an Ubuntu 18.04 server using `Node.js`, `serve`, and [PM2](https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/)


> PM2 is a process manager for the JavaScript runtime Node.js. This is an open-source daemon process manager that helps to manage and keep applications 24/7.


## Prerequisites

To follow this tutorial, you’ll need the following:

  * *Latest Node.js version* installed on your computer or Linux server where you will deploy the application. 

      ```
      sudo apt-get update
      sudo apt-get install nodejs
      node -v or node –version
      npm -v or npm –version
      ```
  - `create-react-app` tool 

      ```
      npm install -g create-react-app
      ```
### Deploying the React App

  1. First of all, create the app using `npx create-react-app`
      ```
      npx create-react-app my-app
      ```

  2. Now you can run the app by running the following command in the project directory root
      ```
        npm start
      ```
  3. The default react app will run at http://localhost:3000

  4. Now, install the `serve` and `pm2` packages globally on the system/server 

      ```
      npm install -g serve
      npm install -g pm2
      ```

  5. Since you are in the root directory of your project, run the following command to create a production build of your app.
  
      This will create a `build` directory in the project root directory.
      ```
        npm run build
      ```

  6. Now you can run the following command to deploy the app  

      ```
        pm2 serve <path> <port> --spa
      ```
      
      In this case, you can run the following command.

      ```
        pm2 serve build 8082 --spa 
      ```

> PM2 can serve static files quickly with the `pm2 serve` feature. It supports serving raw files from a specified folder, or you can serve a SPA (Single Page Application) with it.

You can see that your application is running on the 8081 port while you have logged out from your ssh terminal of the browser. 

- Check the status of the application with the following command in the shell. 

  ```
  pm2 list
  ```

![pm2 List](pm2list.png)


**Bonus**: The following are some utility commands to manage the pm2 process:

- Specify the app name: `pm2 --name <app-name>`
- Delete all pm2 process:  `pm2 delete all`
- Delete specific process: `pm2 delete <app-name>`
- Check the CPU and memory usage: `pm2 monit`

## References

1. [Quick start pm2 ](https://pm2.keymetrics.io/docs/usage/quick-start/)
2. [Process management with pm2](https://pm2.keymetrics.io/docs/usage/process-management/)
