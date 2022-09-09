const h1 = document.querySelector("h1");

function func() {
  alert("Event triggered!");

  // Remove event listener
  h1.removeEventListener("mouseenter", func);
}

// New way of adding events
h1.addEventListener("mouseenter", func);
// Using addEventListener we can attach multiple events
h1.addEventListener("click", func);

// Old way of adding events
h1.onmouseenter = func;
// Using the old way of adding events overrides all prior events
h1.onclick = func;
