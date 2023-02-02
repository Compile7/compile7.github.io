---
title: "Understanding Unique Keys for Array Child Elements in React"
date: "2023-01-12"
coverImage: unique-keys-array-child-elements.png
tags:
  - "React"
description: "Learn how to properly assign unique keys to array child elements in React to ensure efficient updates & avoid common errors."
author: "Abhimanyu Singh Rathore"
prevLabel: A Beginner’s Guide to CSS Media Queries
previous: introduction-to-css-media-queries
nextLabel: How to Programmatically Navigate with React Router
next: how-to-programmatically-navigate-with-react-router
---

Unique keys in React help assign identifiers to an array's elements for tracking them aptly.

They can be used to render a dynamic list of items or to ensure that the order of elements is preserved in the rendered output.

This article explores the following:

- why you might need to use unique keys;
- how to create and assign them; and,
- in what situations you should or shouldn't use them.

## Why Use Unique Keys?

Unique keys are important in React as the framework uses them to build and track virtual DOM elements. If you don’t assign a valid key to an element, the framework won't render or update it correctly.

When you're rendering a list of items, React should be able to identify each item as an individual element in order to render changes efficiently.

This can include adding, removing, or modifying items in the array.

Without valid keys, React won't accurately track these items, which can lead to errors such as `React has encountered an unexpected argument`.

## How to Create and Assign Unique Keys
As you understand the importance of unique keys in React, the next step is to learn how to create and assign them.

The easiest way to create a unique key is to use a JavaScript library, such as [Lodash](https://lodash.com/) or [Underscore.js](https://underscorejs.org/), which provide convenient functions for generating a short random string.

Once you've generated a key, you need to assign it to the React element you want to track.

You can do it by adding the “key” attribute to the element when you render it. 

For example:

```js
<div key={key}> ... </div>
```

In the following code snippet, we have an array of objects being used to render a list in React. Using the index as the key property value helps React keep track of each item. This ensures React can perform reconciliation and make necessary UI changes when data is modified.

```js
class App extends React.Component {
  state = {
    list: [
      {name: 'John', age: 27},
      {name: 'Sam', age: 23},
      {name: 'Sara', age: 30},
    ]
  };
  
  render() {
    const {list} = this.state;
    return (
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item.name} ({item.age} years old)
          </li>
        ))}
      </ul>
    );
  }
}```

In the above example, the list items each have a unique key using the index. This helps React keep track of each item if any changes are made to the array.

It's important to note that the index should only be used when the order of the list items remains static. If the order of the list items is subject to change, it's best to use a unique identifier such as an id.

For example, if the list items are coming from a database and the order of the items is subject to change, an id would be the best option for the key property value. Having an id allows React to keep track of each item even when the list order changes.

```js
class App extends React.Component {
  state = {
    list: [
      {id: 1, name: 'John', age: 27},
      {id: 2, name: 'Sam', age: 23},
      {id: 3, name: 'Sara', age: 30},
    ]
  };
  
  render() {
    const {list} = this.state;
    return (
      <ul>
        {list.map(item => (
          <li key={item.id}>
            {item.name} ({item.age} years old)
          </li>
        ))}
      </ul>
    );
  }
}
```

It's important to remember that if the key value is unavailable, JavaScript will assign a unique key to that element. However, relying on this behavior is neither recommended nor good practice.

## When to Use Unique Keys?

You should generally use unique keys when rendering an array of dynamic elements, such as a list of items or components.

It helps React to track each element and add, remove, or modify the list as needed.

You should also use them for elements that are similar in structure but need to be distinct from each other, such as two “siblings” nested in the same parent element.

### When Not to Use Unique Keys?

Unique keys should not be used for elements that are not dynamic.

In other words, if the order of elements won't change or if you won't be adding or removing elements from the array, there is no need for a key.

### Conclusion

In conclusion, understanding and using unique keys in React is essential when working with dynamic arrays of elements.

They allow React to keep track of the individual elements and render changes quickly and efficiently. Remember that they should only be used when rendering dynamic lists and not for elements that don’t change order or quantity.

