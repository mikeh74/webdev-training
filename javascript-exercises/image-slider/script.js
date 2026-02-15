// Image Slider Exercise
// Create a slideshow that cycles through images with next/previous buttons

const images = getImageElements();

console.log("=== Image Slider Initialized ===");
console.log("Total images:", images.length);
console.log("Images array:", images);

const sliderContainer = document.querySelector('.slider-content')
const img = document.createElement('img');
img.src = "";
img.alt = "Empty slide";
img.setAttribute('id', 'slider-image');
sliderContainer.appendChild(img);

// Get HTML elements
const sliderImage = document.getElementById('slider-image');
const currentSlideSpan = document.getElementById('current-slide');
const totalSlidesSpan = document.getElementById('total-slides');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Current slide index
let currentIndex = 0;

// Set total slides
totalSlidesSpan.textContent = images.length;

function getImageElements() {
  // Array of images (selects __all__ image elements on page)
  const imgElements = Array.from(document.getElementsByTagName('img'))
  let images = []

  imgElements.forEach((img) => {
    images.push({
      url: img.src,
      caption: img.alt
    })
  })

  return images
}

// Function to show a specific slide
function showSlide(index) {
  console.log("\n=== Showing Slide ===");
  console.log("Requested index:", index);
  console.log("Current index before:", currentIndex);

  // Update current index
  currentIndex = index;

  // Update image
  sliderImage.src = images[currentIndex].url;
  sliderImage.alt = images[currentIndex].caption;

  // Update counter
  currentSlideSpan.textContent = currentIndex + 1;

  console.log("Current index after:", currentIndex);
  console.log("Displaying:", images[currentIndex].caption);
}

// Function to go to next slide
function nextSlide() {
  console.log("\n=== Next Slide ===");
  console.log("Before - currentIndex:", currentIndex);

  // KEY CONCEPT: Modulo operator for circular navigation
  // (currentIndex + 1) % images.length wraps back to 0 after the last image
  currentIndex = (currentIndex + 1) % images.length;

  console.log("After - currentIndex:", currentIndex);
  console.log("Calculation: (", currentIndex - 1, "+ 1) %", images.length, "=", currentIndex);

  showSlide(currentIndex);
}

// Function to go to previous slide
function prevSlide() {
  console.log("\n=== Previous Slide ===");
  console.log("Before - currentIndex:", currentIndex);

  // KEY CONCEPT: For going backwards, we add images.length before modulo
  // This prevents negative numbers
  currentIndex = (currentIndex - 1 + images.length) % images.length;

  console.log("After - currentIndex:", currentIndex);
  console.log("Calculation: (", currentIndex + 1, "- 1 +", images.length, ") %", images.length, "=", currentIndex);

  showSlide(currentIndex);
}

// Event listeners
prevBtn.addEventListener('click', () => {
  console.log("Previous button clicked");
  prevSlide();
});

nextBtn.addEventListener('click', () => {
  console.log("Next button clicked");
  nextSlide();
});

// Initialize
showSlide(0);
console.log("✅ Slider ready! Use arrow keys or buttons to navigate.");

// YOUR TURN:
// 1. Add auto-play functionality (hint: use setInterval)
// 2. Add pause button for auto-play
// 3. Add swipe gestures for touch devices
// 4. BONUS: Add transition animations between slides

// Keyboard navigation
document.addEventListener('keydown', (event) => {
  console.log("Key pressed:", event.key);

  // trigger next/prev slide on arrow key press
});
