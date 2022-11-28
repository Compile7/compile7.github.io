---
title: "How to Build a Responsive Navbar with HTML and CSS"
date: "2022-11-28"
coverImage: responsive-navbar-with-html-and-css.png
tags:
  - "HTML"
  - "CSS"
description: "In this tutorial, you'll learn how to create a responsive navigation with barebones HTML and CSS."
author: "Hitesh Kumawat"
---
Let's use HTML and CSS to create a responsive navbar.

## Introduction: What is a Navbar?
A navbar is a navigation bar that usually appears at the top of the page. The navbar usually contains the website's logo, navigation links to other pages on the site, and sometimes a search box.

Navbars are essential for usability and accessibility. It should help users find their way around your site without any problems.

## What do Navbars do?
Navbars are a navigation element that helps create a navigation menu that is always visible.

A responsive navbar is an essential element in the design of any website. It provides a way for users to navigate the pages and find what they want on the site. The navbar should be responsive, adjusting to accommodate different screen sizes and resolutions.

You can create navbars using HTML and CSS.

## Designing Your Responsive Navbar from Scratch

So, let's start with the HTML part:

```html
<!--Hamburger menu start-->
        <input type="checkbox" id="navcheck">
        <div class="nav-btn">
            <label htmlfor="navcheck">
                <span></span>
                <span></span>
                <span></span>
            </label>
        </div>
        <!--Hamburger menu end-->
        <!--Header start-->
        <header class="header">
            <nav class="navbar">
                <!--Logo-->
                <h1>
                    <a href="#" class="nav-logo">Responsive Navbar</a>
                </h1>
                <!--Logo-->
                <!--Navigation-->
                <ul class="nav-menu">
                    <li class="nav-item">
                        <a href="#" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Services</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Contact</a>
                    </li>
                </ul>
                <!--Navigation-->
            </nav>
        </header>
        <!--Header start-->
        <!--Backdrop start (for mobile menu only)-->
        <div class="backdrop"></div>
        <!--Backdrop end (for mobile menu only)-->
```
👆 This is the HTML that you require.

### Add the CSS Reset

Add some basic CSS to reset all the default styles:

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    font-size: 16px;
}
li {
    list-style: none;
}
a {
    text-decoration: none;
}
```
### Add Styles to the Elements One By One

#### 1. Header and Navbar

```css
.header {
    background: #303030;
    color: #fff;
    position: relative;
    z-index: 2;
}
.navbar {
    max-width: 1248px;
    padding: 0 24px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 72px;
}
.navbar h1 a,
.navbar ul li a {
    color: #fff;
}
.navbar ul {
    display: flex;
}
.navbar ul li a {
    padding: 0 16px;
    transition: all 0.2s ease-in-out;
}
.navbar ul li a:hover,
.navbar ul li a:focus {
    color: blue;
}
```

#### 2. Hamburger

```css
/* Hamburger Menu*/
#navcheck,
.nav-btn,
.backdrop {
    display: none;
}
.nav-btn {
    position: fixed;
    right: 24px;
    top: 26px;
    z-index: 99;
}
.nav-btn label span {
    display: block;
    width: 30px;
    height: 1.5px;
    background: #ffffff;
    border-radius: 3px;
    transition: background-color 0.3s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.3s ease-in-out,
        -webkit-transform 0.3s cubic-bezier(0.77, 0.2, 0.05, 1);
    -webkit-transition: background-color 0.3s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.3s ease-in-out,
        -webkit-transform 0.3s cubic-bezier(0.77, 0.2, 0.05, 1);
    transition: transform 0.3s cubic-bezier(0.77, 0.2, 0.05, 1), background-color 0.3s cubic-bezier(0.77, 0.2, 0.05, 1),
        opacity 0.3s ease-in-out;
    transition: transform 0.3s cubic-bezier(0.77, 0.2, 0.05, 1), background-color 0.3s cubic-bezier(0.77, 0.2, 0.05, 1),
        opacity 0.3s ease-in-out, -webkit-transform 0.3s cubic-bezier(0.77, 0.2, 0.05, 1);
    position: relative;
}
.nav-btn label span:not(:last-child) {
    margin-bottom: 7px;
}
```

#### 3) Lastly, Add the Media Queries for Mobile and Tablet

```css
@media (max-width: 992px) {
    .nav-menu {
        display: none !important;
    }
    .nav-btn {
        display: block;
    }
    .navbar ul li a {
        color: #303030;
        width: 100%;
        display: block;
        padding: 16px;
    }
    #navcheck {
        opacity: 0;
        position: fixed;
        top: 0;
        right: 0;
        width: 72px;
        height: 72px;
        z-index: 999;
        cursor: pointer;
        margin: 0;
        display: block;
    }
    input#navcheck:checked ~ .nav-btn label span:first-child {
        -webkit-transform: rotate(45deg) translate(6px, 6px);
        transform: rotate(45deg) translate(6px, 6px);
        top: 0;
        left: 0;
    }
    input#navcheck:checked ~ .nav-btn label span:last-child {
        -webkit-transform: rotate(-45deg) translate(6px, -6px);
        transform: rotate(-45deg) translate(6px, -6px);
        top: 0;
        left: 0;
    }
    input#navcheck:checked ~ .nav-btn label span:nth-child(2) {
        opacity: 0;
    }
    input#navcheck:checked ~ .header .navbar .nav-menu {
        display: block !important;
        position: absolute;
        top: 72px;
        left: 0;
        right: 0;
        background-color: #fff;
    }
    input#navcheck:checked ~ .backdrop {
        position: absolute;
        display: block;
        background-color: rgba(0, 0, 0, 0.36);
        width: 100%;
        height: calc(100% - 72px);
        z-index: 1;
    }
}
```

This media query hides your nav-menu by setting display: none on it.

You also set your hamburger to display: block; as a result, it is now visible.

You can [clone the code used for this tutorial on GitHub](https://github.com/Hiteshkumawat/responsive-navbar) or [view the live example with this demo link](https://responsive-navbar-html-css.netlify.app/).

## Conclusion
So, that's it! You've built a responsive navbar with HTML and CSS. I hope you like it. Feel free to share this article with your friends on social media. Thank you 😀

