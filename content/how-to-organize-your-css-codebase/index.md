---
title: "How to Organize Your CSS Codebase"
date: "2022-12-15"
coverImage: css-codebase.png
tags:
  - "CSS"
description: "In this tutorial, you'll learn how to segregate, manage, and organize your CSS code in a better manner using code segmentation through files and folders."
author: "Hitesh Kumawat"
prevLabel: How to Programmatically Navigate with React Router
previous: how-to-programmatically-navigate-with-react-router
nextLabel: How to Create Protected Routes in React
next: how-to-create-protected-routes-in-react
---

Managing a large CSS file can become difficult as you work progressively on bigger projects and larger stylesheets.

In this tutorial, you'll learn some good practices for maintaining your CSS code that are easy to follow and maintain. In addition, you'll get to know some of the solutions you can use to make your CSS code maintainable.

Let's begin with your CSS folder structure.

## 1) Folder Structure

A good folder structure will make your life easier when you need to find the proper stylesheet for a particular component or layout in your project.

CSS  
├── base  
│ ├── reset.css  
│ └── typography.css  
├── components  
│ ├── button.css  
│ └── dropdown.css  
├── layout  
│ ├── navigation.css  
│ └── header.css  
│ └── sidebar.css  
├── utils  
│ ├── variables.css  
│ └── utilities.css  
├── vendors  
│ └── bootstrap.min.css  
├── pages  
│ ├── login.css  
│ └── contact.css  
└── main.css  

## 2) Base Folder
This folder contains all the base styles for the website. All the other folders will be built on this one and will override it if necessary.

```css
/* reset.css */
html {
    box-sizing: border-box;
    font-size: 16px;
}
,:before,*:after {
    box-sizing: inherit;
}
body,h1,h2,h3,h4,h5,h6,p,ol,ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
}
ol,ul {
    list-style: none;
}
img {
    max-width: 100%;
    height: auto;
}
```

```css
/* typography.css */
h1{
    font-size: 4.4rem;
}
h2{
    font-size: 2.6rem;
}
h3{
    font-size: 1.8rem;
}
h4{
    font-size: 1.2rem;
}
h5{
    font-size: 1rem;
}
p{
    font-size: 1.3rem;
    letter-spacing: 0.02rem;
}
```

## 3) Components Folder
This folder contains all the components used across different pages, like buttons, text fields, modals, dropdowns, etc.

```css
/* button.css */
.btn {
    display: block;
    color: black;
    border-color: transparent;
    &:disabled,
    &.disabled {
        pointer-events: none;
    }
}
.btn--primary {
    background: blue;
    color: white;
}
```

```css
/* dropdown.css */
.dropdown{
    cursor: pointer;
    position: relative;
    display: inline-block;
    outline: none;
}
.dropdown .menu{
    cursor: auto;
    position: absolute;
    display: none;
    outline: none;
    top: 100%;
    min-width: max-content;
    margin: 0;
}
```

## 4) Layout Folder
This folder has stylesheets for the main reusable parts of the site: header, footer, navigation, sidebar, etc.

```css
/* header.css */
header{
    display: flex;
    padding: 1rem;
    font-size: 2rem;
    line-height: 2;
    color: black;
    background-color: white;
    align-items: center;
    flex-wrap: nowrap;
}
```

## 5) Utils Folder
This should contain any utility classes or mixins reused across the site.

```css
/* variables.css */
:root{
    --color-blue:#0d6efd;
    --color-indigo:#6610f2;
    --color-purple:#6f42c1;
    --color-pink:#d63384;
    --font-primary:'Inter',sans-serif;
    --font-secondary:'Raleway',sans-serif;
}
```

```css
/* utilities.css */
.hidden{
    display: none;
}
.mt-5{
    margin-top: 4.5rem;
}
.bg-blue-100{
    background-color: #10a7e8;
}
```

## 6) Vendors Folder
This folder holds all the CSS files from external libraries and frameworks like [Bootstrap](https://getbootstrap.com/), [Foundation](https://get.foundation/), etc.

Putting those aside in the same folder is an excellent way to say, “Hey, this is not from me.”

## 7) Pages Folder
This folder contains individual pages that make up the website: these can be named according to their content type — e.g., "home," "about us," “contact us,“ etc.

```css
/* login.css */
.login-form{
    display: flex;
    flex-direction: column;
    padding: 10rem 8rem;
    box-shadow: -0.5rem 0rem 4rem 0.5rem rgba(0, 0, 0, 0.5);
    z-index: 1;
}
.login-logo{
    height: 5rem;
    margin-bottom: 2rem;
    position: relative;
}
.login-logo svg{
    width: 100%;
    margin: auto;
    position: relative;
    margin-left: 50%;
    transform: translateX(-30%);
}
```

## 8) `main.css`
This is where you import all of the before-mentioned files.

```css
/* main.css */
/* vendors */
@import './vendors/bootstrap.min.css';
/* base */
@import './base/reset.css';
@import './base/typography.css';
/* layout */
@import './layout/navigation.css';
/* components */
@import './components/button.css';
/* pages */
@import './pages/login.css';
/* utils */
@import './utils/variables.css';
@import './utils/utilities.css';
```

## Conclusion

Hopefully, you have learned a lot and will be able to organize the CSS codebase of your next project in a better way.

I hope you like the blog, Happy Reading!

