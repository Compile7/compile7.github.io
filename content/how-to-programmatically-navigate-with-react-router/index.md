---
title: "How to Programmatically Navigate with React Router"
date: "2023-01-04"
coverImage: programmatically-navigate-react-router.png
tags:
  - "React"
description: "Want to implement programmatic navigation in your React applications for better UX? This tutorial helps you implement programmatic navigation with React Router."
author: "Versha Gupta"
prevLabel: Understanding Unique Keys for Array Child Elements in React
previous: understanding-unique-keys-for-array-child-elements-in-react
nextLabel: How to Organize Your CSS Codebase
next: how-to-organize-your-css-codebase
---

Modern websites, especially Single Page Applications (SPAs), which do not load the entire page, require programmatic routing — so that they can load the component as needed when a user clicks on an event or takes some other action, or they can load the complete view when necessary.

React has its own router, `react-router-dom`, that handles the programmatic navigation, used widely in React applications.

Generally, a user is redirected to an action that has been added to the route programmatically. Some everyday actions are registration, login, and form submission.

## Redirect Component
The `<Redirect />` component is the primary way to navigate programmatically, which helps users navigate between routes.

This component is typically used to efficiently perform redirects by importing the component from the `react-router-dom` package and utilizing this to supply the page to the `to` prop where you want to redirect.

Code example of the `Redirect` component:

```javascript
import React, { useState } from 'react';
import Form from './Form';
import { Redirect } from 'react-router-dom';
const Page = () => {
const [isSession, setIsSession] = useState(false);
const handleLoginForm = ()=>{
if(haveSession)setIsSession(true);
}
if (isSession) {
return <Redirect to='/profile' />
}
return (
<>
<h1>Login</h1>
<Form onSubmit={handleLoginForm} />
</>
)
}
export default Page;
```

## `withRouter` Method
The HOC (High Order Component) `withRouter` will provide the nearest route's `match`, current `location,` and `history` props to the wrapped component whenever it renders.

[React Router](https://reactrouter.com/) developers built it to make the `history` property accessible to a component. Simply, it connects the component to the Router, as follows.

```javascript
import React from 'react';
import Form from './Form';
import { withRouter } from 'react-router-dom';
const Page = (props) => {
const handleLoginForm = () => {
if(haveSession) props.history.push('/profile');
}
return (
<>
<h1>Login</h1>
<Form onSubmit={handleLoginForm} />
</>
)
}
export default withRouter(Page);
```

## `history.push()` Method
There’s another method, `history.push()`. Here,  you use the history props — that the React Router provides — when rendering a component.

The history prop tracks all session history, which also offers many ways to manipulate session history.

Here, you’ll use the `push` method. You typically use it to push the path to history and employ a LIFO (Last in, First Out) strategy to guide users to the most recent route added to the history props.

Below is the code example of the `history.push()` method:

```javascript
import React from "react";
import Form from './Form';
const Page = props => {
const handleLoginForm = () => {
if (haveSession) props.history.push("/profile");
};
return (
<>
<h1>Login</h1>
<Form onSubmit={handleLoginForm} />
</>
);
};
export default Page;
```

## `useHistory` Hook
Another new function, `useHistory`, was added in the most recent version of React Router (v5.1).

Within the functional component, you may use this hook for programmatic navigation.

The `useHistory` hook gives you access to history props and eliminates the need for `withRouter` HOC.

```javascript
import { useHistory } from "react-router-dom";
const Page = () =>{
let history = useHistory();
const handleLoginButton = () => {
history.push("/profile");
}
return (
<button type="button" onClick={handleLoginButton}>
Profile Page
</button>
);
}
export default Page;
```

## Conclusion
React Router is usually used for client-side routing. In this article, you’ve learned how to navigate programmatically in a React application.
