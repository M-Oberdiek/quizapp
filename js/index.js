const buttonToggle = document.querySelector('[data-js="bookmark"]');
buttonToggle.addEventListener("click", () => {
  bookmarkElement.classList.toggle("activ");
});
