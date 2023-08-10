const bookmark = document.querySelector('[data-js="bookmark"]');
console.log(bookmark);
bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("bookmark--activ");
});

const answer = document.querySelector('[data-js="answer"]');
const showAnswer = document.querySelector('[data-js="show-button"]');
showAnswer.addEventListener("click", () => {
  answer.classList.toggle("answer--show");

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
