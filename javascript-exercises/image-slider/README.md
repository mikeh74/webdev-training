# Image Slider/Carousel

## Exercise Overview

Create a slideshow that cycles through images with next/previous buttons.

## Objectives

- Manage the current slide index state
- Navigate through an array of images
- Handle edge cases (first/last slide navigation)
- Create smooth transitions between slides
- Implement an interactive UI component

## Key Concepts

- Array indexing
- State management (current slide index)
- Event listeners
- DOM manipulation
- CSS transitions/animations
- Modulo operator for circular navigation

## Features to Implement

1. Display one image at a time
2. Previous button to go to the previous slide
3. Next button to go to the next slide
4. Optional: Slide indicators/dots showing which slide is active
5. Optional: Auto-play functionality

## Tasks

[x] 1. Create an array of image URLs (or use placeholder images)
[x] 2. Create a variable to track the current slide index
[x] 3. Create a function to display the current slide
[x] 4. Implement logic to handle wraparound (last → first, first → last)
[ ] 5. Add event listeners to next/previous buttons

## Tips

- Start with `currentIndex = 0`
- Use the modulo operator for circular navigation: `(currentIndex + 1) % images.length`
- For going backward: `(currentIndex - 1 + images.length) % images.length`
- Update the image `src` attribute to change the displayed image
- Add CSS transitions for smooth fade or slide effects
- Consider disabling buttons briefly during transitions

## Example Images Array

Example images can be found in the `img` folder.

## Extension Challenges

- Add keyboard navigation (arrow keys)
- Add different transition effects (fade, slide, zoom)
- Add thumbnail navigation
- Add auto-play that advances slides every few seconds
- Add pause/play buttons for auto-play
- Pause auto-play when user hovers over the slider
- Add touch/swipe support for mobile devices
- Add captions for each image
- Make the slider responsive
- Add lazy loading for images

## CSS Animation Ideas

```css
.slider img {
    transition: opacity 0.5s ease-in-out;
}

.fade-out {
    opacity: 0;
}

.fade-in {
    opacity: 1;
}
```
