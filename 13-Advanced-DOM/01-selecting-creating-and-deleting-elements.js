/* • Allows us to make JavaScript interact with the browser;
• We can write JavaScript to create, modify and delete HTML elements; set styles, classes and attributes; and listen and respond to events
• DOM tree is generated from an HTML document, which we can then interact with;
• Dom is very complex API that contains lots of methods and properties to interact with the DOM tree; */

// --- Selecting elements ---
// Selects the <html> tag
document.documentElement;

// Selects the <head> tag
document.head;

// Selects the <body> tag
document.body;

// Uses CSS selector to select the first matching element 
document.querySelector(".header");

// Uses CSS selector to select one or more elements and returns a NodeList collection
document.querySelectorAll(".section");

// Selects an individual element using a specific id
document.getElementById("section--1");

// Selects all elements with specific tag name and returns a HTMLCollection
document.getElementsByTagName("buttons");

// Selects all elements with a given class name and returns a HTMLCollection
document.getElementsByClassName("btn");


// --- Creating and inserting elements ---
// Inserts a text as nodes into the DOM tree at a specified position
sel.insertAdjacentHTML(position, text);

// Create, modify and prepend element
const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = "We use cookies for improved functionality and analytics.";
message.innerHTML = `
We use cookies for improved functionality and analytics.
<button class='btn btn--close--cookie'>Got it!</button>
`;
// Add as first child
sel.prepend(message);
// Add as last child (moves the element from first child to last child)
sel.append(message);

// (!) The DOM element message is unique, it can only exist in one place at a time

// Copy an element and all its child elements (prepends a new copy of the message element)
sel.prepend(message.cloneNode(true));

// Add element before or after an element as a sibling
sel.before(message);
sel.after(message)


// --- Delete elements ---
document.querySelector(".btn--close-cookie").addEventListener("click", () => {
  // New way of removing element
  message.remove();

  // Old way of removing element
  message.parentElement.removeChild(message);
});
