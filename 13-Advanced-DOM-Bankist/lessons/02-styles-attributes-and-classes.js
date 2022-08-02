// --- Styles ---
const message = document.createElement("div");
message.style.backgroundColor = "#37383d";
message.style.width = "120px";

// Get an style that was set explicitly
console.log(message.style.color); // → empty (the color hasn't been set explicitly)
console.log(message.style.backgroundColor); // → rgb(55, 56, 61)

// Get an style that was set implicitly (.css file)
console.log(getComputedStyle(message).color); // →  returns the color
console.log(getComputedStyle(message).height); // →  returns the height

// getComputedStyle.height returns a string - 0px
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + "px";


// --- Working with CSS Custom Properties ---
// Set or change an CSS custom property
document.documentElement.style.setProperty("--color-primary", "orange");


// --- Attributes ---
const logo = document.querySelector(".img");
const link = document.querySelector(".link");
// Standard attributes
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
logo.alt = "Beautiful minimalist logo";

// Non-standard attributes
console.log(logo.designer); // won't work
console.log(logo.getAttribute("designer")); // works
logo.setAttribute("company", "Bankist");

// Absolute vs Relative
console.log(logo.src); // → http://127.0.0.1:8080/img/logo.png (absolute version)
console.log(logo.getAttribute("src")); // → img/logo.png (relative version)

console.log(link.href); // → http://127.0.0.1:8080/# (absolute version)
console.log(link.getAttribute("href")); // → # (relative version)

// Data attributes (special attributes that start with data)
// data-version-number
console.log(sel.dataset.versionNumber);
// data-full-name
console.log(sel.dataset.fullName);


// --- Classes ---
sel.classList.add("a", "b", "c");
sel.classList.remove("a", "b", "c");
sel.classList.toggle();
sel.classList.contains();

// Don't use because it overrides all existing classes
sel.className = "a";
