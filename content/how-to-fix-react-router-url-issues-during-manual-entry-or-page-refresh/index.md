---
title: "Why React-Router URLs Fail During Manual Entry or Page Refresh"
date: "2023-03-28"
coverImage: fix-react-router-url-issues-with-hashrouter.jpg
tags:
  - "React"
  - "Router"
description: "In this tutorial, you'll learn how to fix React-Router URL refresh issue using HashRouter."
author: "Abhimanyu Singh Rathore"
prevLabel: Top 10 YouTube Channels for Aspiring Developers
previous: best-youtube-channels-for-aspiring-developers
nextLabel: How to Build a Responsive Dashboard Layout with CSS Grid
next: build-a-responsive-dashboard-layout-with-css-grid
---

Ever faced a blank screen or 404 error when refreshing a page in your app powered with React Router? It occurs when the URL doesn't match any routes in your app.

Fortunately, there's a simple solution to this problem: the **HashRouter**. This type of router uses the hash portion of a URL (i.e., everything after the `#` symbol) to keep track of your location within the single-page application.

Here's an example of how to switch from using the BrowserRouter to the HashRouter in your React application:

```js
import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

export default App;
```

With the HashRouter, your URLs will look like http://localhost:3000/#/about rather than http://localhost:3000/about.

So, when you refresh the page or manually a URL, the request goes to the server. It then returns the same HTML and JavaScript files. The router can then use the hash value to determine the correct location within the single-page application.

As a result, the hash value in the URL may not be as visually appealing as a traditional URL without a hash. But this is a cosmetic issue that doesn't affect your application's functionality.

Furthermore, the HashRouter may not be suitable for all use cases. For example, if you're building a public-facing website that needs search engine crawling and indexing, the HashRouter might not produce good SEO results. In such cases, better to use the BrowserRouter with a server-side solution to handle refresh and manual URL scenarios.

## Conclusion
The HashRouter is a great solution for fixing React-Router URL issues when refreshing or entering them manually. It's easy to set up and use and provides a seamless user experience.

Just be mindful of the trade-offs and consider your use case before deciding.

For more information on using the HashRouter with React-Router, check out the official documentation: https://reacttraining.com/react-router/web/api/HashRouter.