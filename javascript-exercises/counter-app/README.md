# Counter App

## Exercise Overview

Create increment, decrement, and reset buttons that update a displayed number.

## Objectives

- Manage application state with a counter variable
- Handle multiple button click events
- Update DOM content dynamically
- Create a simple but interactive user interface

## Key Concepts

- Variables for state management
- Event listeners on multiple elements
- DOM manipulation
- Conditional logic (optional for features like preventing negative numbers)

## Features to Implement

1. Display showing the current count (starting at 0)
2. Increment button (+1)
3. Decrement button (-1)
4. Reset button (back to 0)

## Tasks

[x] 1. Create a counter variable initialized to 0
[x] 2. Create a function to update the display with the current count
[x] 3. Add event listeners to all three buttons
[x] 4. Increment button increases count by 1
[ ] 5. Decrement button decreases count by 1
[ ] 6. Reset button sets count back to 0
[ ] 7. Update the display after each action

## Tips

- Keep track of the count in a variable (not just in the DOM)
- Create a reusable function to update the display
- Call the update function after each button click
- Consider adding visual feedback (color changes based on value)
- Use `textContent` to update the displayed number

## Extension Challenges

- Add color changes: green for positive, red for negative, gray for zero
- Add custom increment/decrement amounts (input field or +5/-5 buttons)
- Add a limit (min/max values)
- Add animation when the number changes
- Add keyboard support (arrow keys to increment/decrement)
- Store the count in localStorage to persist between page reloads
- Add a history of all changes
- Create multiple independent counters on the same page

## CSS Styling Ideas

```css

.positive { color: green; }
.negative { color: red; }
.zero { color: gray; }

```
