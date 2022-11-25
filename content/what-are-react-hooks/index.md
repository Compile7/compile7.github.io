---
title: "What are react hooks"
date: "2022-11-28"
category: "React"
coverImage: reacthooks.jpg
tags:
  - "React"
  - "Hooks"
description: "Build complex react components in easier way with react hooks."
author: "Abhimanyu Singh Rathore"
---

## Overview

React Hooks is used to utilise state and side effects of React function components.

Let suppose there is a case where you need to toggle the text color on some event and business logic & UI goes in **Class Component** and that goes lengthy and complex.

If you are using react, then this can be easily handled by hooks.


## What are Hooks?

 Hooks introduced in React version 16.8, Hooks actually allows you to 'hook into' react function's lifecycle or state.

 Hooks work without classes.



You can watch and read more about hooks proposal in [Dan Abramov](https://twitter.com/dan_abramov)'s   [ReactConf 2018 keynote](https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889).

The key takeaway from above conference :

> If the react community welcomes **hooks**, it will make writing applications a lot easier without switching between classes, HOC, render props, functions etc.

## Benefits of React Hooks

Reach hooks does the enablement of attaching local state to functional components instead **class component**. 


### Advantages :

-   More Readable
-   Write less Code.
-   Very Optimized components
-   Makes complex components easier 
-   Handling logics & events within functional components.
-   Better Performance of Functional Components

### Practical Approach

As we know we can create React components via 2 ways either **function** or **class**, in most cases we get confusion in both.

Will start with a basic class component and then we turn it into a function with hooks, let see how it goes.

#### Hook less Component : Class Component


```
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

#### Hook Component : Functional Component

```
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

> if you still not clear you can try to play this snippet, which will clear all your doubts.


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

In this blog I will go through basic hooks, let's understand with examples.



### useEffect()

React `useEffect()` can be used in any of below lifecycle of component

1.  componentWillUnmount
2.  componentDidMount
3.  componentDidUpdate

The below example will change the message after 1 second once it is mounted.

```
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

So if you execute the above example, you will find that  `console.log` printed twice. because `useEffect` get into action if `state` or `props`changes this works as the same `componentDidUpdate` in class components.

Now as a solution we can pass **(\[\]) Empty array ** as argument in useEffect hooks


```
  useEffect(() => {
    console.log("Now useEffect hook triggered");

    setTimeout(() => {
      setMyMessage("Hello");
    }, 1000)
  }, []);
```



Now this means, it will not retrigger, we can pass a variable if we want to control as per variable value changes.

For eg : `[mymessage]` here hook will trigger on the change of this variable only.






### useState()

```
import React, { useState } from 'react';

const App = () => {
  const [mymessage, setMyMessage] = useState('Hi');

  return <h1>{mymessage}</h1>
};

export default App;
```

Like in **class component** we have `constructor()` to set initial value to state like below example, useState does the same thing to set `Hi` Value in mymessage.


```
const [mymessage, setMyMessage] = useState('Hi');
 
 vs

this.state = {
    mymessage: "Hi"
}
```


If you want to check out hooks in more detail , you can check the [in depth explanation](https://reactjs.org/docs/hooks-reference.html) in the React documentation.

### Hooks Rules 


1. Hooks should be called at the very beginning or top level, not inside condition or loops or nested function etc.

2.  Do not use hooks in regular javascript functions; it can be called only in  **React Function** or **Custom Hooks**.


> We can use [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) this eslint plugin that ensures the above two rules.

## Conclusion

So in this blog we have understood how we can use react hooks to control state without using class components.

Hope you like the blog, Happy Reading !


