---
title: "A Beginner’s Guide to CSS Media Queries"
date: "2023-01-17"
coverImage: css-media-queries.png
tags:
  - "CSS"
description: "Learn how to use CSS media queries to apply different CSS styles to multiple devices based on attributes like screen size, resolution, and color depth."
author: "Hitesh Kumawat"
prevLabel: Compile7 Blog
previous: 
nextLabel: Understanding Unique Keys for Array Child Elements in React
next: understanding-unique-keys-for-array-child-elements-in-react
---

With CSS Media Queries, you can apply different CSS styles based on some characteristics of the device displaying a webpage, such as screen size, resolution, or color depth.

It's a powerful tool for creating responsive designs that adapt to different screen sizes and make your website look great on all devices.

In addition, you can use media queries as follows:

- Use different styles for various media types
- Orientation (landscape or portrait mode)
- Resolution

This article explains how to make a web page more responsive with media queries.

Sounds interesting? Let's get started.

## Let's Start With the Syntax

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

There are a lot of media features. Check out this table: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features

Let's look at an example in action so that you can build a compelling hold on the concept.

```css
@media screen and (min-width: 600px) {
    div {
        background: green;
    }
}
```

In this case, the background will be green if the screen width is 600px or greater. [You can view the demo here](https://cssmediaqueries.netlify.app/)

You can also use "And", "Not", or "Or" to combine two media features.

For example:

```css
@media screen and (min-width: 600px) and (max-width: 900px) {
    div {
        background: green;
    }
}
```

In this case, the background will be green and will range in width from 600px to 900px. [You can view the demo here](https://cssmediaqueries.netlify.app/operator.html).

You can experiment with several different media features.

- any-hover
- color
- height
- width
- grid
- aspect-ratio
- orientation
- resolution, etc...

You can also write nested media queries as follows:

When `min-width` is set to 600px, and the user hovers over the element, a solid black border is created around `div`.

```css
@media screen and (min-width: 600px) {
    @media screen and (any-hover: hover) {
        div:hover {
            border: 10px solid black;
        }
    }
}
```

You can also invert the media query by adding the keyword `not` after `@media`.

The "Not" keyword simply flips the condition — i.e., you can now say that the condition is `max-width: 600px`.

```css
@media not screen and (min-width: 600px) {
    div {
        border: 10px solid black;
    }
}
```

Managing media queries can be a difficult task at times.

So, whenever you're working on pure CSS, check some standard device viewports and try to keep the number of media queries in your code to a minimum.

Media Queries for Standard Devices: https://css-tricks.com/snippets/css/media-queries-for-standard-devices/

I hope this gives you a good overview of how media queries work, the syntax of media queries, and other such things.

You can [find more information on CSS media queries in this MDN article](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries).

## Conclusion
Hopefully, you've learned a lot and now understand the fundamentals of CSS media queries.
I hope you like the blog — Happy Reading!
