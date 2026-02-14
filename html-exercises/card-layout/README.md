# Card Layout Exercise

## Objective
Create a responsive card layout that displays a collection of items in a grid pattern. This exercise demonstrates how CSS Grid and Flexbox can both solve the same layout problem, though each has its own strengths.

## Requirements

### Layout Specifications
- Display 6 product/content cards in a responsive grid
- Cards should have equal heights within each row
- On desktop (>768px): 3 cards per row
- On tablet (481px-768px): 2 cards per row  
- On mobile (≤480px): 1 card per row
- Maintain consistent spacing (gap) between cards
- The layout should be centered on the page

### Card Content
Each card contains:
- An image placeholder (colored div)
- A title
- A short description
- A price or call-to-action

## Challenge

**Implement this layout using BOTH approaches:**

### Option 1: CSS Grid
- Use `display: grid`
- Control columns with `grid-template-columns`
- Handle gaps with `grid-gap` or `gap`
- Consider using `repeat()` and `minmax()` for responsive behavior
- Or use media queries to adjust `grid-template-columns`

**Advantages of Grid approach:**
- More explicit control over rows and columns
- Cards automatically align in a strict grid
- Great for two-dimensional layouts
- Less code for equal-height columns

### Option 2: Flexbox
- Use `display: flex` with `flex-wrap: wrap`
- Control card width with percentages or `flex-basis`
- Handle gaps with `gap` or margins
- Use media queries to adjust card width

**Advantages of Flexbox approach:**
- More flexible when content varies
- Cards can adjust to fill available space
- Better for one-dimensional flow
- More intuitive for some developers

## Learning Outcomes
- Understand when to use Grid vs Flexbox
- Practice responsive design with media queries
- See that multiple solutions can solve the same problem
- Learn that Grid and Flexbox are complementary, not competing technologies

## Bonus Challenges
1. Add hover effects to the cards (scale, shadow, etc.)
2. Implement a "featured" card that spans 2 columns (easier with Grid!)
3. Add smooth transitions
4. Try CSS Grid's `auto-fit` or `auto-fill` for truly flexible layouts
5. Create a third solution using CSS Grid's `auto-fill` with `minmax()` that doesn't need media queries

## Tips
- Start with one approach, get it working, then try the other
- Pay attention to browser dev tools to see the layout boxes
- Both approaches can use the `gap` property for spacing (modern CSS)
- Consider which approach feels more intuitive to you
