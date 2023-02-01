---
title: "The Ultimate Guide to Adding JavaScript to Gatsby Sites"
date: "2022-02-01"
tags:
  - "Gatsby"
  - "Javascript"
description: "A complete guide to adding JavaScript to Gatsby sites, covering why, when, how, best practices and library utilization."
author: "Mohammed Modi"
---

## Introduction

Gatsby is a popular open-source framework for building modern web applications using React. The script tag is an HTML element that is used to embed or reference JavaScript code in a web page. In Gatsby, the script tag can be used to add custom JavaScript to your website, or to load external libraries and plugins.

## Ways  to add javascript in Gatsby Site

**Inline Scripts**: You can add inline scripts directly to your component's HTML code using the script tag. For example:

```javascript
<script> console.log("This is an inline script"); </script>
```

**External Scripts:** You can also load external scripts from a URL by referencing it in the src attribute of the script tag. For example:

```javascript
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

**Gatsby plugins:** You can also use Gatsby plugins to manage the loading of scripts. For example, the `gatsby-plugin-scripts` API allows you to load external scripts asynchronously and in a way that optimizes performance.
    
**Gatsby APIs:** You can use the gatsby-browser and gatsby-ssr APIs to add custom scripts that run in the browser or on the server, respectively.
    
**Import statements:** In addition to the above methods, you can also include JavaScript files in your Gatsby site by using import statements in your component files.  For example:
```javascript
import './your-script.js';
```

### Gatsby Script API
- The Gatsby Script API was integrated into version 4.15.0 of Gatsby.
- Gatsby comes with a `<Script>` component that effectively loads scripts.
- This component offers a simple way to manage different loading methods and provides a default approach that delivers exceptional performance by default. Both external script sources and inline scripts can be handled.
- Whether you prefer to let Gatsby handle script management or desire maximum control, the <Script> component is an excellent tool for the task.

## Conclusion

Ultimately, the best method for including JavaScript files in a Gatsby site will depend on the specific requirements and use case of your website. It's important to consider the security and performance implications of any scripts you add and to use the appropriate method to ensure optimal performance and security.