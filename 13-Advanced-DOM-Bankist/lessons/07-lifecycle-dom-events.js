/* The DOMContentLoaded event fires when the initial HTML document has 
been completely loaded and parsed, without waiting for stylesheets and 
images to finish loading. Only handle DOMContentLoaded event if you 
placed the script in the head without defer or async. */
document.addEventListener("DOMContentLoaded", function (e) {
  console.log("HTML parsed and DOM tree built!", e);
});

// This is equivalent to DOMContentLoaded in Vanilla JS (jQuery).
$(document).ready();

/* The load event is fired when the whole page has loaded, including all 
dependent resources such as stylesheets and images. */
window.addEventListener("load", function (e) {
  console.log("Page fully loaded", e);
});

/* The beforeunload event is fired just before the user is about to leave 
a page. It can be used to ask users if they are 100% sure they want to 
leave the page. */
window.addEventListener("beforeunload", function (e) {
  // Some browsers require us to call preventDefault() in order to use this
  e.preventDefault();
  console.log(e);
  // returnValue displays warning before leaving the page (!It's been deprecated)
  e.returnValue = "";
});
