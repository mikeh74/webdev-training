---
title: JavaScript 101
permalink: /javascript-101
---

# Introduction to JavaScript

JavaScript is the programming language of the web. It runs in the browser and lets you make pages **interactive and dynamic** — responding to user actions, updating content without reloading, and communicating with servers.

## Adding JavaScript to a Page

The most common approach is to load an external script file. Place the `<script>` tag just before `</body>` so the HTML loads first:

```html
<body>
  <!-- page content -->
  <script src="app.js"></script>
</body>
```

You can also write JavaScript inline inside a `<script>` block, or add `type="module"` for ES module support:

```html
<script type="module" src="app.js"></script>
```

## Variables

Use `const` for values that don't change, and `let` for values that do. Avoid `var`.

```js
const siteName = 'My Website';   // cannot be reassigned
let count = 0;                    // can be reassigned
count = count + 1;
```

## Data Types

| Type | Examples |
|---|---|
| `string` | `'hello'`, `"world"` |
| `number` | `42`, `3.14` |
| `boolean` | `true`, `false` |
| `null` | `null` |
| `undefined` | `undefined` |
| `array` | `[1, 2, 3]` |
| `object` | `{ name: 'Alice', age: 30 }` |

```js
const message = 'Hello, World!';
const price = 9.99;
const isLoggedIn = false;
const colours = ['red', 'green', 'blue'];
const user = { name: 'Alice', age: 30 };
```

## Operators

```js
// Arithmetic
5 + 3   // 8
10 - 4  // 6
3 * 7   // 21
8 / 2   // 4
10 % 3  // 1  (remainder)

// Comparison (always use === not ==)
5 === 5    // true
5 !== 3    // true
10 > 7     // true

// Logical
true && false  // false (AND)
true || false  // true  (OR)
!true          // false (NOT)
```

## Functions

Functions let you group reusable blocks of code:

```js
// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

greet('Alice');  // "Hello, Alice!"

// Arrow function (concise syntax)
const double = (n) => n * 2;

double(5);  // 10
```

Use template literals (backticks) to embed expressions in strings:

```js
const name = 'World';
console.log(`Hello, ${name}!`);  // Hello, World!
```

## Conditionals

```js
const score = 72;

if (score >= 90) {
  console.log('Excellent');
} else if (score >= 60) {
  console.log('Pass');
} else {
  console.log('Fail');
}
```

## Loops

```js
// For loop
for (let i = 0; i < 5; i++) {
  console.log(i);  // 0, 1, 2, 3, 4
}

// Iterate over an array
const fruits = ['apple', 'banana', 'cherry'];

for (const fruit of fruits) {
  console.log(fruit);
}

// Array forEach method
fruits.forEach((fruit) => {
  console.log(fruit);
});
```

## Arrays

```js
const numbers = [10, 20, 30, 40];

numbers.length;           // 4
numbers[0];               // 10
numbers.push(50);         // add to end
numbers.pop();            // remove from end

// Useful array methods
numbers.map((n) => n * 2);            // [20, 40, 60, 80]
numbers.filter((n) => n > 15);       // [20, 30, 40]
numbers.find((n) => n > 25);         // 30
numbers.includes(20);                // true
```

## Objects

```js
const user = {
  name: 'Alice',
  age: 30,
  isAdmin: false,
};

user.name;           // 'Alice'  (dot notation)
user['age'];         // 30       (bracket notation)
user.email = 'alice@example.com';   // add a new property
```

## DOM Manipulation

The **Document Object Model (DOM)** is the browser's representation of the HTML page. JavaScript can read and modify it:

```js
// Select elements
const heading = document.querySelector('h1');
const buttons = document.querySelectorAll('button');

// Read and update content
heading.textContent = 'New Heading';
heading.style.color = 'tomato';

// Create and append elements
const para = document.createElement('p');
para.textContent = 'A new paragraph.';
document.body.appendChild(para);

// Add / remove CSS classes
heading.classList.add('highlight');
heading.classList.remove('highlight');
heading.classList.toggle('highlight');
```

## Event Handling

Events let you respond to user actions:

```js
const btn = document.querySelector('#myButton');

btn.addEventListener('click', function (event) {
  console.log('Button clicked!');
  event.preventDefault();  // stop default browser behaviour
});
```

Common events: `click`, `submit`, `keydown`, `keyup`, `mouseover`, `change`, `input`, `load`.

## Fetch and Asynchronous JavaScript

`fetch` is the modern API for making HTTP requests. Because network requests take time, they are *asynchronous* — JavaScript doesn't wait for them to finish before running the next line.

### Using async / await (recommended)

```js
async function getUser(id) {
  const response = await fetch(`https://api.example.com/users/${id}`);
  const data = await response.json();
  console.log(data);
}

getUser(1);
```

### Using Promises

```js
fetch('https://api.example.com/posts')
  .then((response) => response.json())
  .then((posts) => console.log(posts))
  .catch((error) => console.error('Error:', error));
```

## Error Handling

```js
try {
  const result = riskyOperation();
  console.log(result);
} catch (error) {
  console.error('Something went wrong:', error.message);
}
```

## Browser Console

The browser console (open with **F12** or **Cmd + Option + I** on Mac) is your best debugging tool:

```js
console.log('A value:', someVariable);
console.error('An error occurred');
console.table(arrayOfObjects);
```

Set breakpoints in the **Sources** panel to pause execution and inspect values step by step.

## Further Resources

- [MDN: JavaScript Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [MDN: Learn JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
- [MDN: JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [MDN: JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [javascript.info](https://javascript.info/) — a modern, in-depth JavaScript tutorial
- [Eloquent JavaScript](https://eloquentjavascript.net/) — free online book
- [web.dev: Learn JavaScript](https://web.dev/learn/javascript)

## Next Steps

- Practice with the **[JavaScript Exercises](../javascript-exercises/README.md)** in this repository.
- Explore the browser's built-in APIs: [Web APIs on MDN](https://developer.mozilla.org/en-US/docs/Web/API).
- Once comfortable, look into modern frameworks such as [React](https://react.dev/), [Vue](https://vuejs.org/), or [Svelte](https://svelte.dev/).
