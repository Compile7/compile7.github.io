---
title: "How to Develop Responsive Websites"
date: "2023-01-20"
coverImage: develop-responsive-websites.png
tags:
  - "CSS"
description: "Create adaptable websites for different screen sizes for optimal viewing using flexible grids, images, and CSS media queries, among others."
author: "Hitesh Kumawat"
prevLabel: Compile7 Blog
previous: 
nextLabel: A Beginner’s Guide to CSS Media Queries
next: introduction-to-css-media-queries
---

This tutorial offers a complete introduction to how to make responsive websites.

Let's make your website more mobile-friendly.

When creating a responsive website, you only need to consider one thing:

"Content's ability to fit inside any device that looks good and allows the user to interact with it"

Responsive web design isn't a software or framework. You can say it's a mash-up of various concepts that you use to make your website look great on all devices.

The wonderful thing is that responsive website design can be achieved using only HTML and CSS.

## 1) Viewport Meta Tag
The `<meta>` viewport element is the first and most important thing in responsive web design.

It forces the page to adapt to the device's screen width.

```css
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

## 2) Use `box-sizing: border-box`
I'm not sure if you agree with this point, but small things can have a significant impact.

`box-sizing: border-box;` forces an element to adjust its padding and border within the element's width and height.

Even a 2px border can damage responsiveness. As a result, when designing responsive websites, I always consider `box-sizing: border-box`.

## 3) Dynamic Element Dimensions
Assume an element has a width of 500px, but the user is viewing it on a device with a width of less than 500px.

Use `min-width` or `max-width` in such cases.

## 4) Use the HTML `<picture>` Tag
You can use the HTML `<picture>` element to specify different images for different browser window sizes.

```css
<picture>
    <source media="(min-width:768px)" srcset="/path">
    <source media="(min-width:480px)" srcset="/path">
    <img src="/path" >
</picture>
```

## 5) Responsive Text Size
Although you can use [media queries](https://compile7.org/decompile/introduction-to-css-media-queries/) to make text responsive, you can also use `viewport width`.

For example:

```css
selector { font-size: 10vw; }
```

## 6) Try to Use Layouts
Using a Grid or Flexbox layout to make a web page responsive is always beneficial. Both of these layouts are simple to learn. Try to use them.

You can learn more about Flexbox here: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox

You can learn more about Grid layout here: https://developer.mozilla.org/en-US/docs/Web/CSS/grid

## 7) Media Queries Are the Savior
Media queries are used to apply different styles to various media types/devices.

If CSS code is written within a media query, it will only be applied when the specified condition is met.

```css
@media screen  and (min-width: 480px){
    .element{
        width:100px;
    }
}
```

Here is the basic syntax of a media query:

```css
@media screen (min-width: 320px) and | or | not (max-width: 768px) {
    /* whole bunch of CSS code */
}
```

- **@media** : Media queries start with @media keyword.
- **Screen**: The general category of a device is described by media types. In this case, for example, we are targeting devices with a screen.
- **min-width**: This feature describes a specific property of the media.
- **And, Or, and Not are operators**
	- *Not*: Inverse the condition
	- *And*: When both conditions true
	- *Or*: At least one condition must be true

> **Note:** [A Beginner’s Guide to CSS Media Queries](https://compile7.org/decompile/introduction-to-css-media-queries/)

## 8) Use `auto` in Media

Almost 99% of the web page is made up of images or videos. So, use "auto" to make them responsive.

If you set the width property to a percentage and the height to `auto`, the image will be responsive.

To improve further, use `max-width` in the image to ensure that the image's quality is maintained.

## 9) Use Frameworks When Possible
When writing pure CSS, dealing with responsiveness can be time-consuming.

Try to use frameworks because they can help you develop responsive websites more quickly.

Some useful CSS frameworks are as follows:
1. [Bootstrap](https://getbootstrap.com/)
2. [Tailwind CSS](https://tailwindcss.com/)
3. [Foundation](https://get.foundation/)
4. [Bulma](https://bulma.io/)
5. [Skeleton](http://getskeleton.com/)

## Conclusion
Hopefully, you've learned a lot and will be able to improve the mobile-friendliness of your website.

I hope you like the blog — Happy Reading!

