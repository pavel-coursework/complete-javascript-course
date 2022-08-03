/* HTML
<ul id="parent">
  <li class="child">One</li>
  <li class="child">Two</li>
  <li class="child">Three</li>
  <li class="child">Four</li>
  <li class="child">Five</li>
</ul>;
*/

// Obvious approach
const children = Array.from(document.getElementsByClassName("child"));

children.forEach((child) => {
  child.addEventListener("click", () => {
    /* Do Something */
  });
});

const newLi = document.createElement("li");
newLi.textContent = "Six";
// A new event listener must be added to each new element (!DRY)
newLi.addEventListener("click", () => {
  /* Do Something */
});
parent.append(newLi);


// Event Delegation
const parent = document.getElementById("parent");

parent.addEventListener("click", (event) => {
  console.log(e.target); // Identify where the event happened

  if (event.target.matches("li")) { // Check if the element is li
    /* Do Something */
  }
});

// There is no need to add new event listeners to new elements with Event Delegation
const newLi = document.createElement("li");
newLi.textContent = "Six";
parent.append(newLi);


/* Making the event delegation work requires 4 steps:
1. Determine the parent of elements to watch for events
2. Attach the event listener to the parent element
3. Use event.target to select the target elements
4. Check if the target is the desired element */