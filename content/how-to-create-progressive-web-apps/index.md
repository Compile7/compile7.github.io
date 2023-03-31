---
title: "How to Build Progressive Web Apps"
date: "2023-03-31"
coverImage: how-to-build-progressive-web-apps.png
tags:
  - "React"
  - "HTML"
  - "CSS"
  - "JavaScript"
description: "Welcome to our blog dedicated to all things Progressive Web Apps! Here, we explore the latest trends, best practices, and cutting-edge techniques for building fast, reliable, and engaging web experiences that work seamlessly across all devices and platforms. "
author: "Bhupendra Singh Chauhan"
prevLabel: 
previous: 
nextLabel:
next: 
---

Progressive Web Apps (PWA) are becoming increasingly popular for their ease of use and compatibility across multiple platforms. In this blog, we'll walk you through the process of creating a GiveItAway app without a payment gateway using React, and show you how to make it a PWA.

To get started, make sure you have Node.js installed on your system. We'll be using create-react-app in our project, so open up your terminal and run the following command:

```
npx create-react-app GiveItAway-app
```
This will create a new React project in a folder called 'GiveItAway-app'.

Next, navigate into the project folder by running:

```
cd GiveItAway-app
```
Once you're in the project folder, you can open it in your code editor of choice. We'll be using Visual Studio Code in this tutorial, but feel free to use whichever editor you prefer.

Before we start writing any code, let's install the necessary dependencies for our PWA. Run the following command in your terminal:

```
npm install --save-dev webpack-pwa-manifest workbox-webpack-plugin

```
The webpack-pwa-manifest package will generate a manifest file for our PWA, which is required by modern browsers to display our app as a standalone application. The workbox-webpack-plugin package will help us cache our app's assets for offline use.

Now that we have our dependencies installed, let's start writing some code!

First, let's create a simple header component that will display the name of our GiveItAway app. Create a new file called Header.js in the src/components folder and add the following code:

```
import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>GiveItAway App</h1>
    </header>
  );
};

export default Header;
```
This component simply renders a header tag with the name of our app.

Next, let's create a component to display a list of charities. Create a new file called CharityList.js in the src/components folder and add the following code:

```
import React from 'react';

const charities = [
  {
    id: 1,
    name: 'Charity One',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://picsum.photos/200',
  },
  {
    id: 2,
    name: 'Charity Two',
    description: 'Nullam a lectus vel nisi commodo tempus.',
    image: 'https://picsum.photos/200',
  },
  {
    id: 3,
    name: 'Charity Three',
    description: 'Fusce quis justo vel tortor vestibulum ullamcorper.',
    image: 'https://picsum.photos/200',
  },
];

const CharityList = () => {
  return (
    <ul>
      {charities.map((charity) => (
        <li key={charity.id}>
          <h2>{charity.name}</h2>
          <p>{charity.description}</p>
          <img src={charity.image} alt={charity.name} />
        </li>
      ))}
    </ul>
  );
};

export default CharityList;
```
This component defines an array of charity objects, and then maps over them to render a list of charities. Each charity object has an id, name, description, and image.

Now let's create a simple layout for our app. Create a new file called App.js in the src folder and add the following code:

```
import React from 'react';
import Header from './components/Header';
import CharityList from './components/CharityList';

const App = () => {
  return (
    <div>
      <Header />
		<main>
		<CharityList />
		</main>
		</div>
		);
		};

export default App;
```

This component simply renders our Header component and our CharityList component.

Before we turn our app into a PWA, let's add some styles to make it look a bit nicer. Create a new file called App.css in the src folder and add the following code:

```
body {
margin: 0;
font-family: Arial, sans-serif;
}

header {
background-color: #e53935;
color: #fff;
padding: 20px;
}

header h1 {
margin: 0;
}

ul {
list-style: none;
padding: 0;
margin: 0;
}

li {
display: flex;
align-items: center;
padding: 20px;
border-bottom: 1px solid #ccc;
}

li img {
width: 100px;
margin-right: 20px;
}

```

This CSS file styles the body, header, list, and list items of our app.

Now that our app is looking good, let's turn it into a PWA. First, we need to create a manifest file. Create a new file called manifest.json in the public folder and add the following code:

```
{
"name": "GiveItAway App",
"short_name": "GiveItAway",
"description": "A GiveItAway app",
"icons": [
{
"src": "icon.png",
"sizes": "192x192",
"type": "image/png"
},
{
"src": "icon.png",
"sizes": "512x512",
"type": "image/png"
}
],
"start_url": ".",
"display": "standalone",
"background_color": "#e53935",
"theme_color": "#e53935"
}
```

This manifest file defines the name, short name, description, icons, start URL, display mode, background color, and theme color for our PWA.

Next, we need to tell our app to use this manifest file. Open the public/index.html file and add the following code to the head section:

```
<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
```
This will tell the browser to load our manifest file.

Finally, we need to add some caching logic to our app so that it can work offline. 

create and Open sw.js file and add the following code :

```
export default function swDevfunc() {
  let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
  navigator.serviceWorker.register(swUrl).then((response)=>{
  });
}
```

Import this sw in index.js and call after rendring the app
```
import swDevfunc from './sw'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

swDevfunc()
```
This will generate a service worker for our app that will cache our assets and allow us to work offline.

That's it! We've successfully created a GiveItAway app without a payment gateway and turned it into a PWA. You can view the complete code for this project on GitHub: https://github.com/username/GiveItAway-app

To run the app, simply run the following command in your terminal:

```
npm start
```
This will start the development server and open the app in your browser.

In conclusion, building a PWA app using React is a simple and straightforward process. By following the steps outlined in this blog post, you can create a fully functional app that works offline and can be installed on any device. If you have any questions or comments, feel free to reach out to us. Happy coding!