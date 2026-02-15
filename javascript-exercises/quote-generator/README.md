# Random Quote Generator

## Exercise Overview

Display a random quote from an array when a button is clicked.

## Objectives

- Work with arrays to store data
- Generate random numbers
- Handle click events
- Update DOM content dynamically
- Create an interactive user interface

## Key Concepts

- Arrays
- `Math.random()` and `Math.floor()`
- Event listeners
- DOM manipulation (`textContent` or `innerHTML`)
- Object properties (if storing author with quote)

## Features to Implement

1. Array of quotes (with optional authors)
2. Button to generate a new random quote
3. Display area for the quote
4. Display area for the author (optional)

## Tasks

1. Create an array of at least 10 quotes
2. Create a function to generate a random index
3. Create a function to display the selected quote
4. Add an event listener to the button that calls the display function
5. Display a random quote when the page loads

## Tips

- Use `Math.random()` to generate random numbers
- Use `Math.floor()` to convert to an integer
- Formula: `Math.floor(Math.random() * array.length)` gives a random index
- Store quotes as objects if you want to include author: `{ text: "...", author: "..." }`
- Consider adding animation/transition effects when quotes change

## Example Quote Array

```javascript
const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" }
];
```

## Extension Challenges

- Add a "Copy to Clipboard" button
- Add a "Tweet This Quote" button that opens Twitter with the quote
- Add fade-in/fade-out animations when changing quotes
- Fetch quotes from an external API instead of a hardcoded array
- Add category filters for different types of quotes
- Add a "favorite" feature to save preferred quotes
- Include background color changes with each quote
- Add keyboard support (spacebar for new quote)
