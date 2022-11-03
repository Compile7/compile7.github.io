---
title: "Introduction to React Server Components"
date: "2022-11-03"
category: "React"
coverImage: react-server-component.png
tags:
  - "React"
description: "React Server Components is under research and development at the moment, and soon a stable version may be released. In this article, you can briefly understand React Server Components and how to use them."
author: "Versha Gupta"
---

React Server Components allow you to write the React component in a way that it gets rendered on the server side, and the primary purpose of server-side rendering is to improve the React application performance.

It helps some components of a React application to be rendered on the server, in the browser, or on the server using server-side rendering. 

By using server-side rendering (SSR), React Server components enhance the user experience while potentially reducing the size of client-side JavaScript bundles. The time to interact with the page decreases due to less bundle size, leading to improved performance. Server Components enable you to look better into server infrastructure.

Although React Server Components is still in the research and development stage, you can [grasp some of its fundamental ideas by looking at the demo](https://youtu.be/TQQPAU21ZUw?t=1500).

## React Component Types
| Type | Description | File Name Extension |
| -- | -- | -- |
| Server | React Components that render content on the server and their dependents are not with client-side components.| Server components end in `.server.jsx`. |
| Client | React Components that render only at the client side | Client components end in `.client.jsx`. |
| Shared | React components that render on both the server and client | Shared components don't end with `.server.jsx` and `.client.jsx` |

## Benefits of React Server Components

- React Server components are not merged with the JavaScript bundle, so the browser never downloads it.
- Moving static and render-only components to the server while keeping an interactive state on the client side minimizes bundle size and boosts performance.
- Server components can access server-side resources like databases and filesystem.
- Server components can also read GraphQL queries.

## Limitations of React Server Components

React Server components have some limitations because they render on the server side:

- Server components require more resources and can be costly as all processing is done on the server.
- A site may take longer to load when there are more server queries due to complicated applications.
- Setting up server components can be complicated and tedious.

## How Are React Server Components Different from Server Side Rendering (SSR)?

When using SSR in React applications, you send HTML to the client and then load up all the React application's JavaScript. While Javascript is downloading, the user cannot interact with your application.

In SSR, all of the components are still on the client side. SSR is only used once for the initial rendering.

React Server Components aren't displayed as HTML but as precisely structured content that streams to the client. They fetch some data from the backend and render these components after binding the fetched data. Whenever these components need to be rerendered, they are fetched from the server and merged into the existing one. At this time, the Client state is preserved even if you are fetching parts of the view from the server.

## Conclusion
React Server Components is a fascinating feature that may change how React applications are written as they enable importing packages without impacting the client's bundle size.

You can use both Server and Client Components under an idle DOM tree, enabling you to re-fetch server components as per need without killing the client state.
