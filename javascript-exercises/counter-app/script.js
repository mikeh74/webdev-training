// Counter App Exercise
// Create increment, decrement, and reset buttons that update a displayed number

// Step 1: Get references to HTML elements
const counterDisplay = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');

// Step 2: Initialize counter variable
let counter = 0;
console.log("Counter initialized:", counter);

// Step 3: Create functions to update the display
function updateDisplay() {
    counterDisplay.textContent = counter;
    console.log("Display updated. Current value:", counter);

    // Bonus: Change color based on value
    if (counter > 0) {
      console.log("Counter is positive. Set the colour to green.");
    }
}

// Step 4: Add event listeners (example for increment)
incrementBtn.addEventListener('click', function() {
    console.log("Increment button clicked!");
    console.log("Before:", counter);
    counter++;  // Same as: counter = counter + 1
    console.log("After:", counter);
    updateDisplay();
});

// YOUR TURN: Add event listeners for decrement and reset buttons
// Decrement should reduce counter by 1
// Reset should set counter back to 0

// BONUS CHALLENGES:
// 1. Add buttons to increase/decrease by 5 or 10
// 2. Add a maximum and minimum value
// 3. Show a message when reaching certain milestones (10, 50, 100)
