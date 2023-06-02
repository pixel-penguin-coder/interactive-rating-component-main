const userRatingScore = [...document.querySelectorAll("[data-cell]")];
const submitButton = document.querySelector("#submit");
const firstContainer = document.querySelector("#first-container");
const secondContainer = document.querySelector("#second-container");
const userAnswer = document.querySelector("#user-answer");

submitButton.addEventListener("click", submit);
userRatingScore.forEach((button) => {
  button.addEventListener("click", rate);
});

function submit() {
  if (userRatingScore.some((button) => button.classList.contains("clicked"))) {
    firstContainer.classList.toggle("hide");
    secondContainer.classList.toggle("hide");
  } else {
    alert("Please rate the product");
  }
}

function rate() {
  removeClicked();
  const rating = this.id;
  this.classList.toggle("clicked");
  userAnswer.textContent = `You selected ${rating} out of 5`;
}

function removeClicked() {
  userRatingScore.forEach((button) => {
    button.classList.remove("clicked");
  });
}
