// Random Quote Generator Exercise
// Display a random quote from an array when a button is clicked

// Step 1: Create an array of quotes
const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  }
  // Add more quotes here!
];

console.log("Quotes loaded:", quotes.length);
console.log("All quotes:", quotes);

// Step 2: Get HTML elements
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');

// Step 3: Function to get a random quote
function getRandomQuote() {
  console.log("\n=== Getting Random Quote ===");

  // Generate random index
  const randomIndex = Math.floor(Math.random() * quotes.length);
  console.log("Random index:", randomIndex);
  console.log("Array length:", quotes.length);
  console.log("Math.random() generates:", Math.random(), "(number between 0 and 1)");

  // Get the quote at that index
  const randomQuote = quotes[randomIndex];
  console.log("Selected quote:", randomQuote);

  return randomQuote;
}

// Step 4: Function to display quote
function displayQuote() {
  const quote = getRandomQuote();

  // Update the HTML
  quoteText.textContent = `"${quote.text}"`;
  quoteAuthor.textContent = `- ${quote.author}`;

  console.log("Quote displayed on page!");
}

// Step 5: Add event listener
newQuoteBtn.addEventListener('click', function () {
  console.log("Button clicked!");
  displayQuote();
});

// Display a quote when page loads
console.log("Displaying initial quote...");
displayQuote();

// YOUR TURN:
// 1. Add at least 5 more quotes to the array
// 2. Try adding a category property to each quote
// 3. BONUS: Add buttons to filter by category
