---
title: "React-router URLs don't work when refreshing or writing manually"
date: "2023-02-07"
category: "React"
coverImage: index.png
tags:
  - "React"
  - "Router"
description: "Lets see how to fix React-Router url refresh issue using hashrouter."
author: "Abhimanyu Singh Rathore"
prevLabel: Introduction to React Server Components
previous: what-are-react-server-components
nextLabel: How to Protect Ts.Ed API with JWT Authentication
next: how-to-protect-tsed-api-with-jwt-authentication
---

Have you ever tried to refresh a page in your React-Router-powered application, only to be met with a blank screen or a 404 error? This can happen when the URL doesn't match any of the routes set up in your application.

Fortunately, there's a simple solution to this problem: the **HashRouter**. This type of router uses the hash portion of a URL (i.e., everything after the # symbol) to keep track of your location within the single-page application.

Here's an example of how to switch from using the BrowserRouter to the HashRouter in your React application:

```
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
With the HashRouter, your URLs will look something like http://localhost:3000/#/about instead of http://localhost:3000/about. This means that when the page is refreshed or a URL is manually entered, the request goes to the server, which then returns the same HTML and JavaScript files. The router can then use the hash value to determine the correct location within the single-page application.


One potential disadvantage is that the hash value in the URL may not be as visually appealing as a traditional URL without a hash. However, this is largely a cosmetic issue and doesn't affect the functionality of your application.

Another thing to consider is that the HashRouter may not be the best choice for all use cases. For example, if you're building a public-facing website that will be indexed by search engines, the HashRouter may not provide the best SEO results. In these cases, it may be better to use the BrowserRouter with a server-side solution to handle refresh and manual URL scenarios.

**In conclusion**, the HashRouter is a great solution for fixing React-Router URLs when refreshing or entering them manually. It's easy to set up and use, and it provides a seamless user experience for your users. Just be mindful of the trade-offs and consider your specific use case before making a decision.
For more information on using the HashRouter with React-Router, check out the official documentation: https://reacttraining.com/react-router/web/api/HashRouter.