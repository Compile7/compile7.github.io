---
title: "How to Build Progressive Web Apps"
date: "2023-04-10"
coverImage: how-to-build-progressive-web-apps.jpg
tags:
  - "React"
  - "PWA"
description: "Step-by-step, you'll learn how to create a React app and make it a PWA."
author: "Bhupendra Singh Chauhan"
prevLabel: Hello World, from Cut Genius
previous: cut-genius
nextLabel: Top 10 YouTube Channels for Aspiring Developers
next: best-youtube-channels-for-aspiring-developers
---

Progressive Web Apps (PWA) are becoming more popular due to ease of use and multi-platform compatibility.

So, in this blog, you'll learn how to create a GiveItAway app without a payment gateway using React and how to make it a PWA.

To get started, ensure Node.js is installed on your system. And you'll use `create-react-app` in your project. 

In your terminal, run the following command:

```c
npx create-react-app GiveItAway-app
```

It creates a new React project in a folder called 'GiveItAway-app'.

Next, navigate to the project folder:

```c
cd GiveItAway-app
```

Once you're in the project folder, open it in your code editor of choice.

We use Visual Studio Code in this tutorial but feel free to use whichever editor you prefer.

Before writing code, let's install the necessary dependencies for your PWA. Run the following command in your terminal:

```c
npm install --save-dev webpack-pwa-manifest workbox-webpack-plugin
```

The `webpack-pwa-manifest` package generates a manifest file for your PWA, which modern browsers require to display your app as a standalone application.

The `workbox-webpack-plugin` package helps to cache the app's assets for offline use.

As dependencies are installed, let's start writing some code!

First, let's create a simple header component that displays the name of your GiveItAway app.

Create a new file called `Header.js` in the `src/components` folder and add the following code:

```js
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

This component renders a header tag with the name of your app.

Next, let's create a component to display a list of charities.

Create a new file called `CharityList.js` in the `src/components` folder and add the following code:

```js
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

This component defines an array of charity objects and maps over them to render a list of charities. Each charity object has an id, name, description, and image.

Let's create a simple layout for your app.

Create a new file called `App.js` in the `src` folder and add the following code:

```js
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

This component renders your Header component and your CharityList component.

Before you turn the app into a PWA, let's add some styles to make it look nicer.

Create a new file called `App.css` in the `src` folder and add the following code:

```css
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

This CSS file styles the app's body, header, list, and list items.

Now that the app looks good, let's turn it into a PWA.

First, you need to create a manifest file.

Create a new file called `manifest.json` in the public folder and add the following code:

```js
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

Next, you need to tell the app to use this manifest file.

Open `public/index.html` and add the following code to the head section:

```js
<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
```

This will tell the browser to load the manifest file.

Finally, you shall add some caching logic to the app so that it can work offline. 

Create and open the `sw.js` file and add the following code:

```js
export default function swDevfunc() {
  let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
  navigator.serviceWorker.register(swUrl).then((response)=>{
  });
}
```

Import this `sw.js` in `index.js` and call it after rendering the app:

```js
import swDevfunc from './sw'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

swDevfunc()
```

This will generate a service worker for the app that caches the assets and allows it to work offline.

That's it! You've successfully created a GiveItAway app without a payment gateway and turned it into a PWA.

To run the app, run the following command:

```js
npm start
```

It starts the development server and opens the app in your browser.

## Conclusion

Building a PWA app using React is a simple process. By following the steps outlined in this blog post, you can create a fully functional app that works offline that can be installed on any device.

Happy coding!