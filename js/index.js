const bookmark = document.querySelector('[data-js="bookmark"]');
console.log(bookmark);
bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("bookmark--activ");
});

const answer = document.querySelector('[data-js="answer"]');
const showAnswer = document.querySelector('[data-js="show-button"]');
showAnswer.addEventListener("click", () => {
  answer.classList.toggle("answer--show");
  console.log(answer);
  if (answer.classList.contains("answer--show")) {
    showAnswer.innerText = "Hide answer";
  } else if (answer.classList.contains("answer")) {
    showAnswer.innerText = "Show Answer";
  }
});

const cardContainer = document.querySelector('[data-js="card-container"]');
const addButton = document.querySelector('[data-js="add-button"]');

function addCard(question, answer, categorie) {
  const newCard = document.createElement("li");
  newText.innerText = text;
  newText.classList.add("card-container__newCard");
  cardContainer.appendChild(newText);
  console.log(newText);
}
addCard(A, Q, C);
// form.addEventListener("submit", (event) => {
//event.preventDefault();
//console.log(event.target);
//});

//const textarea = document.querySelector('[data-js="newQuestion"]');
//const charCounterQuestion = document.querySelector(
//  '[data-js="charCounterQuestion"]'
//);
//console.log(textarea);
//textarea.addEventListener("input", (event) => {
//  const restChar = 150 - textarea.value.length;
//  charCounterQuestion.textContent = `Verbleibende Zeichen: ${restChar}`;
//});
