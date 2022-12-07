---
title: "How to create protected routes in React"
date: "2022-12-05"
tags:
  - "React"
description: "Lets learn how to create protected routes in react using this blog with an example "
author: "Shammir Baig"
---

# How to create protected routes in React


Protected routes allows users to access those routes or pages only if they satisfy the prior conditions(ex:Authenticated or not),if not they are redirected to the page which wish them to be redirected.


Lets see how to create Protected Routes in react with an example

## Getting Started:

Use create-react-app to get a bootstrapped simple React application

```sh
npx create-react-app protect-routes
```
 Navigate to the folder you created by :
 
```sh
cd protect-routes
```
To start the React Application
```sh
npm start
```
Now,clean the App.js which returns a simple “Hello World” which makes sure that everything is running correctly.

```sh
function App() {
return <div><h1>Hello World</h1></div>;
}
export default App;
```



## Setting up the React-router 

React-router is used for navigation inside our project.

```sh
npm install react-router-dom
```

For demonstration,Lets create three pages :


- Landing Page 
- Public Page(Which is visible to everyone)
- Private Page (which is visible to only authenticated users)
- Navbar component to navigate to above pages

Create a file named Navbar.js in src folder,which should look like this:
- "Link" in React-router is used to create navigation path to various 
```js
import React from "React";
import {Link} from "react-router-dom";
const Navbar = () => {
return (
<nav style={{ textAlign: "center", marginTop: "20px" }}>
<Link to="/" style={{ padding: "10px" }}>Landing Page</Link>
<Link to="/public" style={{ padding: "10px" }}>Public</Link>
<Link to="/private" style={{ padding: "10px" }}>Private</Link>
</nav>
);
};
export default Navbar;
```

## Coming to App.js

Create the routes inside the App.js matching them in the Navbar.js.

Your App.js should look like this after creating the matching routes


```js
import React from "React";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import Public from "./Public";
import Private from "./Private";
function App() {
return (
<Router>
<Navbar />
<Routes>
<Route path="/" element={<LandingPage />} />
<Route path="/public" element={<Public/>} />
<Route path="/private" element={<Private/>} />
</Routes>
</Router>
);
}
export default App;
```
Now lets create the components which we have referenced in app.js

In LandingPage.js:
```js
import React from "React";
const LandingPage = () => {
return <h1>Landing page</h1>;
};
export default LandingPage;
```

In Public.js:
```js
import React from "React";
const Public= () => {
return <h1>Public page</h1>;
};
export default Public;
```
In Private.js:
```js
import React from "React";
const Private= () => {
return <h1>Private page</h1>;
};
export default Private;
```

## Creating Protected Routes

As we know that Landing Page and Public Page are public which means that anyone can access them ,but private page is accessible to the persons who are authenticated .Lets make a simple Authentication system .

In App.js,do the following modifications:

```js
import react from "React";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { useState } from "React";

function App() {
const [isLoggedIn, setisLoggedIn] = useState(null);
const logIn = () => {
setisLoggedIn(true);
};
const logOut = () => {
setisLoggedIn(false);
};
return (
<Router>
<Navbar />
{isLoggedIn ? (
<button onClick={logOut}>Logout</button>
) : (
<button onClick={logIn}>Login</button>
)}
<Routes>
<Route path="/" element={<LandingPage />} />
<Route path="/public" element={<Public/>} />
<Route path="/private" element={<Private/>} />
</Routes>
</Router>
);
}
export default App;
```

- Here the login button updates the status whether the user is loggedin or not.

In src folder create a file named "Protect.js"
```js
import React from "React";
import { Navigate } from "react-router-dom";
const Protect = ({ isLoggedIn, children }) => {
if (!isLoggedIn) {
return <Navigate to="/" replace />;
}
return children;
};
export default Protect;
```
Lets use this Protect component in the App.js,modify the private route as following:
```js
<Route
path="/private"
element={
<Protect isLoggedIn={isLoggedIn}>
<Private />
</Protect>
}
/>
```
That's it on creating protected routes. You can now access the Private page only if you are logged in. If you try to navigate to the Private page without logging in you will be redirected to the Landing page.

[Project Link](https://github.com/Compile7/compile7-blog-samples/tree/main/how-to-create-protected-routes)  Feel free to clone and run it in your local system to learn more about it.
