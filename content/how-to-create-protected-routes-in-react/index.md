---
title: "How to Create Protected Routes in React"
date: "2022-12-12"
coverImage: protected-routes-in-react.png
tags:
  - "React"
  - "Authentication"
description: "In this tutorial, you'll learn how to create protected routes in React only to allow access to authenticated users for private paths and pages."
author: "Shammir Baig"
nextLabel: How to Learn Programming/Coding?
next: how-to-learn-programming
---

Protected routes allow users to access a specific set of routes or pages only if they satisfy the initial conditions (e.g., Authenticated or not). If they do not meet requirements, they are redirected to a generic page, and access won't be granted.

Let's see how to create Protected Routes in React with an example.

## Getting Started

Use `create-react-app` to get a bootstrapped simple React application:

```sh
npx create-react-app protect-routes
```

Navigate to the folder you created as follows:
 
```sh
cd protect-routes
```

Start the React application:

```sh
npm start
```

Now, clean `App.js`, which returns a simple “Hello World” to ensure that everything is running correctly.

```sh
function App() {
return <div><h1>Hello World</h1></div>;
}
export default App;
```

## Set Up the React Router

`react-router` is used for navigation inside your project.

```sh
npm install react-router-dom
```

For demonstration, let's create three pages:

- Landing Page 
- Public Page (which is visible to everyone)
- Private Page (which is only visible to authenticated users)
- Navbar component to navigate to the above pages

> **Note:** [How to Build a Responsive Navbar with HTML and CSS](https://compile7.org/decompile/responsive-navbar-with-html-and-css/)

Create a file named `Navbar.js` in the `src` folder, as follows:

"Link" in `react-router` creates a navigation path to various routes.

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

## Set Up `App.js`

Create the routes inside the `App.js` matching them in the `Navbar.js`.

Your `App.js` shall be as follows after creating the matching routes:

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

Now, let's create the components that you have referenced in `app.js`:

In `LandingPage.js`:

```js
import React from "React";
const LandingPage = () => {
return <h1>Landing page</h1>;
};
export default LandingPage;
```

In `Public.js`:

```js
import React from "React";
const Public= () => {
return <h1>Public page</h1>;
};
export default Public;
```

In `Private.js`:

```js
import React from "React";
const Private= () => {
return <h1>Private page</h1>;
};
export default Private;
```

## Create Protected Routes

As you know, Landing Page and Public Page are public, meaning anyone can access them.

But, Private Page is only accessible to authenticated users.

Let's create a simple Authentication system.

In `App.js`, do the following modifications:

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

Here, the login button updates the status of whether the user is logged in or not.

In the `src` folder, create a file named `Protect.js`:

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

Let's use this `Protect` component in `App.js` to modify the private route as follows:

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

That's it! You have created the protected routes. 

## Conclusion
You can now access the Private Page only if you are logged in. If you try navigating the Private Page without logging in, you will be redirected to the Landing Page.

You can [find the complete code used in this tutorial on GitHub](https://github.com/Compile7/compile7-blog-samples/tree/main/how-to-create-protected-routes). Feel free to clone and run it on your local machine to learn more.
