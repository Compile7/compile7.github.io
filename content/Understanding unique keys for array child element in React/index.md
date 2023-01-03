# Understanding unique keys for array child element in React.js

Unique keys in React.js are a useful way to assign identifiers to the elements of an array in order to better keep track of them. They can be used to render a dynamic list of items, or to ensure that the order of elements is preserved in the rendered output. In this article, we’ll explore why you might need to use unique keys, how to create and assign them, and what situations you should or shouldn't use them.

##Why Use Unique Keys?

Unique keys are important in React.js because the framework uses them to build and keep track of virtual DOM elements. If you don’t assign a valid key to an element, the framework will not be able to render or update it correctly.

When you are rendering a list of items, React.js needs to be able to identify each item as an individual element in order to render changes efficiently. This can include addition, removal, or modification of items in the array. Without valid keys, React.js won't have an accurate way to track these items, which can lead to errors such as “React has encountered an unexpected argument”.


##How to Create and Assign Unique Keys

Once you understand the importance of unique keys in React.js, the next step is to learn how to create and assign them. The easiest way to create a unique key is to use a JavaScript library, such as lodash or underscore, which provide convenient functions for generating a short random string.

Once you've generated a key, you need to assign it to the React element you want to track. You can do this by adding the “key” attribute to the element when you render it. For example:

```
<div key={key}> ... </div>
```

In the snippet below, we have an array of objects being used to render a list in React. Using the index as the key property value helps React to keep track of each item. This ensures React can perform reconciliation and make any necessary changes to the UI when data is modified.


```
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

In the example above, the list items each have a unique key using the index. This helps React keep track of each item if any changes are made to the array. It's important to note that the index should only be used when the order of the list items remain static. If the order of the list items is subject to change, it's best to use a unique identifier such as an id.

For example, if the list items are coming from a database and the order of the items is subject to change, an id would be the best option for the key property value. Having an id gives React the ability to keep track of each item even when the list order changes.
```
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
It's important to remember that if a situation arises where the key value is not available for some reason, JavaScript will assign a unique key to that element. However, it's neither recommended nor good practice to rely on this behavior.

### When should you use unique keys?

In general, you should use unique keys when you are rendering an array of dynamic elements, such as a list of items or components. This will help React.js track each element and add, remove, or modify the list as needed. You should also use them for elements that are similar in structure but need to be distinct from each other, such as two “siblings” nested in the same parent element.

### When shouldn't  you use unique keys?

Unique keys should not be used for elements that are not dynamic. In other words, if the order of elements won't change, or if you won't be adding or removing elements from the array, then there is no need for a key.

### Conclusion

In conclusion, understanding and using unique keys in React.js is essential when working with dynamic arrays of elements. They allow React.js to keep track of the individual elements and render changes quickly and efficiently. Keep in mind that they should only be used when rendering dynamic lists and should not be used for elements that don’t change order or quantity.

