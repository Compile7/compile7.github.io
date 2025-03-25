---
title: "How to Build a Responsive Dashboard Layout with CSS Grid"
date: "2023-03-14"
coverImage: build-a-responsive-dashboard-layout-with-css-grid.png
tags:
  - "CSS"
  - "HTML"
description: "In this tutorial, you'll learn CSS Grid, and how you can use it to develop responsive dashboard layouts."
author: "Hitesh Kumawat"
prevLabel: Why React-Router URLs Fail During Manual Entry or Page Refresh
previous: how-to-fix-react-router-url-issues-during-manual-entry-or-page-refresh
nextLabel: Top Developer Blogs You Should Read
next: top-developer-blogs-you-should-read
---

CSS Grid is a two-dimensional HTML and CSS layout system that allows you to easily create complex grid-based designs. It can easily adjust to multiple screen sizes, giving it a powerful and flexible approach to organizing content and creating responsive designs. The following are some of the advantages of using CSS Grid:

1. Simple and efficient creation of complex grid-based layouts
2. When compared to traditional CSS methods, you have more control over the layout and design
3. Capability to create responsive designs without relying on JavaScript or other libraries
4. Improved code maintainability and organization
5. Increased accessibility and support for assistive technologies

CSS Grid provides a new set of layout tools for web designers and developers, making it easier to create grid-based designs that are both visually appealing and accessible to all users.

## Learn Grid Containers and Grid Items

In CSS Grid, you can create a layout by defining a "grid container" and its "grid items".

The CSS property `display: grid` on a parent HTML element is used to define a grid container. This element works as a container for all grid items contained within it.

Grid items are the grid container's child elements and are positioned using grid lines and grid cells. You can use CSS properties such as `grid-column` and `grid-row` to define the position of each grid item.

Here's an example to illustrate the concept:

```HTML
<div class="grid-container">
  <div class="grid-item item1">1</div>
  <div class="grid-item item2">2</div>
  <div class="grid-item item3">3</div>
  <div class="grid-item item4">4</div>
</div>
```

```CSS
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 12px;
}
.grid-item {
  background-color: lightgreen;
  text-align: center;
}
.item1 {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}
.item2 {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}
.item3 {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}
.item4 {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}
```

In this example, the `.grid-container` class is the grid container, and the `.grid-item` class is applied to each of the grid items.

The CSS sets the number of columns and rows in the grid, defines the size of each grid cell, and positions each grid item within the grid using the `grid-column` and `grid-row` properties.

## Create a Grid Structure with CSS Grid Properties

The following properties define the structure of a CSS Grid layout:

1. `display: grid` — this property is used to create a grid container and make the child elements within its grid items.

2. `grid-template-columns` — this property is used to define the number of columns and the width of each column in the grid. You can specify the width in absolute units (e.g., px), relative units (e.g., %), or flexible units (e.g., fr).

3. `grid-template-rows` — this property is used to define the number of rows and the height of each row in the grid. You can specify the height in the same units as the width of the columns.

4. `grid-gap` — this property is used to add spacing between the grid cells. You can specify the gap in pixels, and it will be applied between all the columns and rows in the grid.

Here's an example to illustrate the concept:

```HTML
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
</div>
```

```CSS
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 12px;
}
.grid-item {
  background-color: lightgreen;
  text-align: center;
}
```

In this example, the `.grid-container` class sets `display: grid` to create the grid container and `grid-template-columns: repeat(2, 1fr)` and `grid-template-rows: repeat(2, 1fr)` to define the structure of the grid.

The `grid-gap` property sets the gap between the grid cells to 12px. The `.grid-item` class sets a common style for all the grid items.

## Define the Dashboard's Structure with `grid-template-areas`

CSS Grid also includes the `grid-template-areas` property, which allows you to define the structure of a grid by giving grid cells names and using these names to create an abstract representation of the grid layout.

Here's an example to illustrate the concept:

```HTML
<div class="grid-container">
    <header class="header">...</header>
    <aside class="aside">...</aside>
    <main class="main">
        <div class="overview-content">
            <div class="overview-card">...</div>
            <div class="overview-card">...</div>
            <div class="overview-card">...</div>
        </div>
        <div class="chart-content">
            <div class="chart">...</div>
            <div class="chart-overview">...</div>
            <div class="chart-overview">...</div>
        </div>
    </main>
    <footer class="footer"></footer>
</div>
```

```CSS
.grid-container {
    display: grid;
    grid-template-columns: 240px 1fr;
    grid-template-rows: 50px 1fr 50px;
    grid-template-areas:
        'aside header'
        'aside main'
        'aside footer';
    height: 100vh;
gap: 24px;
}
.header{
    grid-area: header;
    background-color: lightgreen;
}
.aside{
    grid-area: aside;
    background-color: lightgreen;
}
.main{
    grid-area: main;
    background-color: lightgreen;
}
.footer{
    grid-area: footer;
    background-color: lightgreen;
}
```

In this example, the `grid-template-areas` property defines the grid's layout by generating a 2x3 grid and assigning strings to each grid cell.

The names correspond to the classes assigned to each grid item, which is then positioned with the `grid-area` property.

The `grid-template-columns` and `grid-template-rows` properties specify the number of columns and rows in the grid, respectively, and the `grid-gap` property specifies a gap of 24px between grid cells.

## Place Grid Items in Grid Cells with `grid-row` and `grid-column`

`grid-row` and `grid-column` properties in CSS Grid are used to place grid items in specific grid cells.

The grid item's starting and ending row and column lines are defined by the values of these properties, which effectively define its position and size within the grid.

Here's an example to illustrate the concept:

```HTML
<div class="overview-content">
    <div class="overview-card">...</div>
    <div class="overview-card">...</div>
    <div class="overview-card">...</div>
</div>
```

```CSS
.overview-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 24px;
}
.overview-content > * {
    background-color: #64748b;
    padding: 24px;
    border-radius: 10px;
    text-align: left;
    font-size: 16px;
    color: #fff;
    outline: 2px dashed skyblue;
    outline-offset: 4px;
}
```

In this example, the `.grid-container` class sets `display: grid` to create the grid container and `grid-template-columns: repeat(3, 1fr)` and `grid-template-rows: repeat(1, 1fr)` to define the structure of the grid.

The `grid-gap` property sets the gap between the grid cells to 12px.

## Make the Dashboard Responsive with Media Queries and Grid Properties

You can use [media queries](https://compile7.org/decompile/introduction-to-css-media-queries/) and grid properties such as `grid-template-columns` and `grid-gap` together to make a CSS Grid-based dashboard layout responsive.

By using media queries, you can define different grid structures for different screen sizes, providing a dynamic and optimized layout for each device.

Here's an example to illustrate the concept:

```CSS
@media (max-width: 767px) {
    .grid-container {
        grid-template-columns: 1fr;
        grid-template-areas:
            "header header"
            "aside main"
            "footer footer";
    }
.chart-content {
        grid-template-columns: 1fr;
    }
    .overview-content {
        grid-template-columns: 1fr;
    }
}
```

In this example, the `@media` query is used to define different grid styles for different screen sizes.

In this case, the styles within the query will be applied when the viewport width is less than or equal to `767px`.

Within the query, the `grid-template-columns` property is set to `1fr` to create a single-column layout.


> **Note:** [A Beginner’s Guide to CSS Media Queries](https://compile7.org/decompile/introduction-to-css-media-queries/)

## Enhance the Dashboard Design Using CSS

You can use CSS to enhance the design of a CSS Grid-based dashboard layout. Here are some common CSS techniques that you can use to add style and improve the look of a dashboard:

1. **Background colors:** Apply background colors to grid items to create visual interest and contrast.
2. **Borders:** Use borders to create a visual separation between grid items and to define the layout of the dashboard.
3. **Typography:** Choose appropriate font styles, sizes, and colors to create a consistent look and feel for the dashboard.
4. **Shadows:** Apply `box-shadows` to grid items to give them depth and to make them stand out.
5. **Transitions:** Add transitions and animations to grid items to make the dashboard more dynamic and interactive.
6. **Icons:** Use icons to add visual interest and provide a more intuitive experience for users.
7. **Margins and paddings:** Apply margins and paddings to grid items to create whitespace and provide visual hierarchy.

## Conclusion and Resources for Further Learning

CSS Grid is a powerful tool for creating flexible and responsive dashboard layouts. Its grid container and grid items make it easy to arrange and organize content on a page.

`grid-template-areas` and `grid-row`/`grid-column` properties allow you to define and position grid items, while media queries and `grid-template-columns`/`grid-gap` make it easy to adjust the layout based on the viewport size.

Finally, with CSS, you can add styling and design to enhance the look and feel of the dashboard.

### Further Learning
If you want to learn more about CSS Grid, here are some resources that you can use:

- [A Complete Guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

- [CSS Grid Layout - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)

- [CSS Grid Garden]( - )https://cssgridgarden.com/)

With these resources, you'll be able to master CSS Grid and build stunning and responsive dashboard layouts for your projects.

