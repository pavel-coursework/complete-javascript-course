/* HTML
<header class="header">
  <div class="header__title">
    <h1>
      <span class="highlight">banking</span>
      <span class="highlight">minimalist</span>
    </h1>
    <h4>A simpler banking experience for a simpler life.</h4>
    <button class="btn">Learn more</button>
    <img
      src="img/hero.png"
      class="header__img"
      alt="Minimalist bank items"
    />
  </div>
</header>
*/

const h1 = document.querySelector("h1");

// Going downwards: child
// Selects all class with highlight within h1 (children)
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orange";

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest(".header").style.background = "var(--gradient-secondary)";

h1.closest("h1").style.background = "var(--gradient-primary)";

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children); // Get all siblings
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = "scale(0.5)";
});
