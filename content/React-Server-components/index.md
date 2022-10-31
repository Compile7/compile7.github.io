---
title: "React Server Components"
date: "2022-10-13"
category: "React"
coverImage: react-server-component.png
tags:
  - "react"
  - "server component"
description: "Overview about the React Server Component"
author: "Versha Gupta"
---



# React Server Component

React Server Components allow developers to write the react component in a way so that it gets rendered on the server side, and the main purpose of server-side rendering is to improve the react application performance.

This helps some componenets of a React application to be rendered on the server, in the browser, or on the server using server-side rendering. 

By using server-side rendering (SSR), React Server components enhance the user experience while potentially reducing the size of client-side JavaScript bundles. The time to interact with the page is decreased due to less bundle size leading to improve performance. Server components enable developers to better to look into server infrastructure.

Although React Server Components is still in the research and development stage, we may grasp some of its fundamental ideas by looking at [the demo](https://youtu.be/TQQPAU21ZUw?t=1500).

## Component Types
|  Type|Description  |FileName Extension|
|--|--|--|--|
| Server | React Components that render content on the server, and their dependents are not with client-side components.|Server components end in `.server.jsx`.
| Client | React Components that render only at client side |Client components end in `.client.jsx`.
| Shared | React components that render on both the server and client |Shared components don't end with `.server.jsx` and `.client.jsx`




## Benefit of React Server Component?
- React Server components are not merged with the javascript bundle, which means it is never downloaded by the browser.
- Moving static and render-only components to the server while keeping interactive state on the client side minimises bundle size and boosts performance.
- Server components can access server-side resources like databases and filesystem 
- Server components can also read GraphQL queries.


## Limitations of React Server Component

React Server components g=have some limitations because it render on the server side:

-   Server components require more resources and can be costly as all processing is done on the server.
-   A site may take longer to load when there are more server queries due to complicated applications.
-   Setting up server components can be complicated and tedious

## How is That Different from Server Side Rendering?

When using SSR in React applications, you send HTML to the client and then load up all the React application javascript. While Javascript is downloading, the user cannot interact with your application.
In SSR, all of the components are still on the client side. SSR is only used once for the initial rendering.

React Server components aren't displayed as HTML, but rather as specifically structured content that streams to the client. They fetch some data from the backend and render these components after binding the fetched data. Whenever these components need to be rerendered, they are fetched from the server and merged into the existing one. At this time, the Client state is preserved even we are fetching parts of the view from the server

## Conclusion
React Server components is a very exciting feature that may change the way of writing React application as they enable to import of packages without impacting the client's bundle size.
Developers can use both Server and Client components under an idle Dom tree and enabling you to re-fetch server components as per need without killing the client state.
