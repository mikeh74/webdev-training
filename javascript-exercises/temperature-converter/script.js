// Temperature Converter Exercise
// Build a function that converts Celsius to Fahrenheit and vice versa

// Formula: F = (C × 9/5) + 32
// Formula: C = (F - 32) × 5/9

// Example conversion function
function celsiusToFahrenheit(celsius) {
    console.log(`Converting ${celsius}°C to Fahrenheit...`);
    const fahrenheit = (celsius * 9/5) + 32;
    console.log(`Result: ${fahrenheit}°F`);
    return fahrenheit;
}

// Test the function
console.log("=== Temperature Converter Tests ===");
celsiusToFahrenheit(0);    // Should be 32°F
celsiusToFahrenheit(100);  // Should be 212°F

// YOUR TURN: Create the fahrenheitToCelsius function
function fahrenheitToCelsius(fahrenheit) {
    // Add your code here
    // Don't forget to add console.log to show the conversion steps!
}

// Test your function
// fahrenheitToCelsius(32);   // Should be 0°C
// fahrenheitToCelsius(212);  // Should be 100°C

// BONUS: Connect to the HTML inputs
const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');

// Example: When user types in Celsius field
celsiusInput.addEventListener('input', function() {
    const celsius = parseFloat(celsiusInput.value);
    if (!isNaN(celsius)) {
        fahrenheitInput.value = celsiusToFahrenheit(celsius).toFixed(2);
    }
});

// YOUR TURN: Add event listener for fahrenheitInput
// When user types in Fahrenheit field, convert to Celsius
