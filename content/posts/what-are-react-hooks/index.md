---
title: "Introduction to React Hooks"
date: "2022-11-29"
category: "React"
coverImage: react-hooks.png
tags:
  - "React"
description: "You'll learn how to build complex React components easily with React Hooks."
author: "Abhimanyu Singh Rathore"
prevLabel: How to Do Password Hashing in Node.js with Bcrypt
previous: hashing-user-passwords-using-bcryptjs
nextLabel: How to Set Up Git Locally on Windows with VS Code
next: how-to-set-up-git-on-windows
---

## Overview

React Hooks are used to utilize the state and side effects of React function components.

Suppose you need to toggle the text color on some event. And business logic & UI go in *Class Component*. This makes it lengthy and complex to make changes.

If you are using React, you can easily handle this with Hooks.

## What are React Hooks?

Hooks are introduced in React version 16.8, which allow you to 'hook into' a React function's lifecycle or state.

And Hooks work without classes.

You can watch and read more about the Hooks proposal in [Dan Abramov](https://twitter.com/dan_abramov)'s [ReactConf 2018 keynote](https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889).

The key takeaway from the conference:

> If the react community welcomes **Hooks**, it will make writing applications much easier without switching between classes, HOC, render props, functions, etc.

## Benefits of React Hooks

Reach Hooks enable attaching local state to functional components instead of the *class component*. 

### Advantages

- More readable
- Write less code
- Very optimized components
- Makes complex components easier
- Handling of logic & events within functional components
- Better performance of functional components

## Practical Approach
You can create React components in two ways: either `function` or `class`; in most cases, it's easy to confuse them with both.

Let's start with a basic class component and turn it into a function with Hooks. Let's see how it goes...

### Hook-less Component: Class Component

```js
import React, { Component } from "react";
class Message extends Component {
  state = {
    text: "",
  };
  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };
  render() {
    return <input value={this.state.text} onChange={this.handleChange} />;
  }
}
export default Message; 
```

### Hook Component: Functional Component

```js
import React, { useState } from "react";
export default () => {
  const [text, setText] = useState("");
  return (
    <input
      value={text}
      onChange={(e) => {
        setText(e.target.value);
      }}
    />
  );
};
```

> if you're not clear yet, you can try to play the above snippet, which helps clear your doubts.

## React Hooks 

### Basic Hooks
 - useEffect()
 - useState()
 - useContext()

### Additional Hooks
 - useReducer()
 - useMemo()
 - useCallback()
 - useImperativeHandle()
 - useDebugValue()
 - useRef()
 - useLayoutEffect()

This tutorial goes through basic Hooks; let's understand them with examples.

### useEffect()

You can use React `useEffect()` in any of the following lifecycles of a component:

1. componentWillUnmount
2. componentDidMount
3. componentDidUpdate

The following example changes the message after a second once it is mounted.

```js
import React, { useState, useEffect } from "react";

const App = () => {
  const [mymessage, setMyMessage] = useState("Hi");

  useEffect(() => {
    console.log("Now useEffect hook triggered");

    setTimeout(() => {
      setMyMessage("Hello");
    }, 1000);
  });

  return <h1>{mymessage}</h1>;
};

export default App;
```

So, if you execute the above example, you find that `console.log` is printed twice. This is because `useEffect` gets into action if `state` or `props` changes. It works as same as `componentDidUpdate` in class components.

As a solution, you can pass `(\[\]) empty array` as an argument in `useEffect` Hooks:

```js
  useEffect(() => {
    console.log("Now useEffect hook triggered");

    setTimeout(() => {
      setMyMessage("Hello");
    }, 1000)
  }, []);
```

This means it will not retrigger; you can pass a variable if you want to control it as per variable value changes.

E.g.: `[mymessage]` — here, the Hook triggers only this variable changes.

### useState()
```js
import React, { useState } from 'react';

const App = () => {
  const [mymessage, setMyMessage] = useState('Hi');

  return <h1>{mymessage}</h1>
};

export default App;
```

Like in *class component*, you have `constructor()` to set the initial value to state, like the following example. `useState` does the same thing to set the `Hi` value in `mymessage`.


```
const [mymessage, setMyMessage] = useState('Hi');
 
 vs

this.state = {
    mymessage: "Hi"
}
```

If you want to check out Hooks in more detail, you can [check the in-depth explanation of React Hooks in the React documentation](https://reactjs.org/docs/hooks-reference.html).

### Hooks Rules 

1. You should call Hooks at the beginning or top level, not inside a condition, loop, nested function, etc.

2. Do not use Hooks in regular JavaScript functions; you can only call in a React function or a custom Hook.

> You can use [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks), which helps ensure the above two rules.

## Conclusion

So, in this blog, you have understood how you can use React Hooks to control the state without using class components.

I hope you like the blog, Happy Reading!


