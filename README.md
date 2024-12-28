# Random Quote Generator

A simple web application that displays random inspirational quotes from famous figures. This project demonstrates basic DOM manipulation and event handling in JavaScript.

## Features

- Displays random quotes from a curated collection
- Shows both quote text and author
- New quote can be generated with a button click
- Clean and simple implementation

## Usage

1. Include the JavaScript code in your project
2. Make sure your HTML has the following elements:
   - An element with class `quote-text` for displaying the quote
   - An element with class `quote-author` for displaying the author
   - A button with ID `new-quote` for generating new quotes

## Code Structure

- `quotes`: Array of quote objects containing `text` and `author` properties
- `getRandomQuote()`: Function that randomly selects a quote from the array
- `displayQuote()`: Function that updates the DOM with the selected quote
- Event listener on the button triggers new quote generation

## Example HTML Structure

```html
<div class="quote-container">
    <p class="quote-text"></p>
    <p class="quote-author"></p>
    <button id="new-quote">New Quote</button>
</div>
```

## How It Works

1. The script first defines an array of quote objects
2. It selects necessary DOM elements using `querySelector` and `getElementById`
3. When the "New Quote" button is clicked, it:
   - Generates a random index
   - Selects a quote from the array
   - Updates the display with the new quote and author

## Customization

You can easily expand the quotes array by adding new objects in the following format:

```javascript
{
    text: "Your quote text here",
    author: "Quote Author"
}
```

## Dependencies

- No external libraries required
- Works with vanilla JavaScript

## Browser Support

- Compatible with all modern browsers
- No polyfills needed for basic functionality

## License

This project is available under the MIT License.

