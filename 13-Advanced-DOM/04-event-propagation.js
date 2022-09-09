const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + 1);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector(".nav__link").addEventListener("click", (e) => {
  this.style.backgroundColor = randomColor;
  console.log("LINK", e.target, e.currentTarget);
  console.log(e.currentTarget === this); // → true

  // Stop propagation
  e.stopPropagation();
});

document.querySelector(".nav__link").addEventListener("click", (e) => {
  this.style.backgroundColor = randomColor;
  console.log("LINK", e.target, e.currentTarget);
});

document.querySelector(".nav").addEventListener(
  "click",
  (e) => {
    this.style.backgroundColor = randomColor;
    console.log("LINK", e.target, e.currentTarget);
  }, true); // true - event handler will listen for capturing event (rarely used)
