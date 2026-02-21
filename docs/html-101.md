---
title: HTML 101
permalink: /html-101
---

# HTML 101 — Introduction to HTML

HTML (HyperText Markup Language) is the foundation of every web page. It provides the **structure and content** of a page using a system of *elements* represented by tags.

## What is HTML?

HTML is not a programming language — it is a *markup language*. You use it to describe the meaning and structure of your content: headings, paragraphs, links, images, lists, forms, and more.

A browser reads an HTML file and renders it as a visual web page.

## Anatomy of an HTML Element

An element is made up of an opening tag, content, and a closing tag:

```html
<p>This is a paragraph.</p>
```

Some elements are *self-closing* and have no content:

```html
<img src="photo.jpg" alt="A photo">
<br>
<hr>
```

Attributes provide extra information about an element and are placed inside the opening tag:

```html
<a href="https://example.com">Visit Example</a>
```

## A Basic HTML Page

Every HTML document shares a common structure:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>Welcome to my first web page.</p>
  </body>
</html>
```

| Part | Purpose |
|---|---|
| `<!DOCTYPE html>` | Tells the browser this is an HTML5 document |
| `<html>` | Root element that wraps all content |
| `<head>` | Metadata — not displayed on the page |
| `<title>` | Text shown in the browser tab |
| `<body>` | Everything visible on the page |

## Key HTML Elements

### Text

```html
<h1>Main heading</h1>
<h2>Sub-heading</h2>
<p>A paragraph of text.</p>
<strong>Bold / important text</strong>
<em>Italic / emphasised text</em>
```

### Links

```html
<a href="https://developer.mozilla.org/">MDN Web Docs</a>
```

### Images

```html
<img src="logo.png" alt="Company logo">
```

Always include an `alt` attribute — it describes the image for screen readers and is displayed when the image cannot load.

### Lists

```html
<!-- Unordered list -->
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<!-- Ordered list -->
<ol>
  <li>Plan</li>
  <li>Build</li>
  <li>Test</li>
</ol>
```

### Forms

```html
<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">

  <label for="email">Email:</label>
  <input type="email" id="email" name="email">

  <button type="submit">Send</button>
</form>
```

## Semantic HTML

Semantic elements describe the *purpose* of their content, making pages more accessible and easier for search engines to understand:

| Element | Meaning |
|---|---|
| `<header>` | Introductory content or navigation |
| `<nav>` | Navigation links |
| `<main>` | The primary content of the page |
| `<article>` | A self-contained piece of content |
| `<section>` | A thematic grouping of content |
| `<aside>` | Content tangentially related to the main content |
| `<footer>` | Footer for its nearest sectioning element |

Prefer semantic elements over generic `<div>` and `<span>` where possible.

## Accessibility Basics

- Use descriptive `alt` text on images.
- Use `<label>` elements with form inputs.
- Use heading tags (`<h1>`–`<h6>`) in a logical order.
- Use semantic elements to communicate structure.

## Further Resources

- [MDN: HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [MDN: HTML Elements Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [MDN: Learn HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML)
- [web.dev: Learn HTML](https://web.dev/learn/html)
- [HTML Living Standard (WHATWG)](https://html.spec.whatwg.org/)

## Next Steps

- Practice with the **[HTML & CSS Exercises](../html-exercises/README.md)** in this repository.
- Read **[CSS 101](css-101.md)** to learn how to style your pages.
- Read **[JavaScript 101](javascript-101.md)** to learn how to add interactivity.
