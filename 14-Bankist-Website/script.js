"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const nav = document.querySelector(".nav");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

///////////////////////////////////////
// Button smooth scrolling

btnScrollTo.addEventListener("click", function (e) {
  e.preventDefault();
  section1?.scrollIntoView({ behavior: "smooth" });
});

///////////////////////////////////////
// Page navigation

// Old implementation
/* document.querySelector('.nav__links').addEventListener("click", function (e) {
  e.preventDefault();
  const href = e.target.getAttribute("href");

  ===
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  ===

  if (href?.length > 1) {
    const section = document.querySelector(href);
    const coords = section?.getBoundingClientRect();

    scrollTo({
      top: coords.top + window.pageYOffset,
      behavior: "smooth",
    });
  }
}); */

// New implementation
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  const href = e.target.getAttribute("href");

  if (href?.length > 1 && e.target.classList.contains("nav__link")) {
    const section = document.querySelector(href);
    section?.scrollIntoView({ behavior: "smooth" });
  }
});