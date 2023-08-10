const bookmark = document.querySelector('[data-js="bookmark"]');
console.log(bookmark);
bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("bookmark--activ");
});

const answer = document.querySelector('[data-js="answer"]');
const showAnswer = document.querySelector('[data-js="show-button"]');
showAnswer.addEventListener("click", () => {
  answer.classList.toggle("answer--show");
});
