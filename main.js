const mainContainer = document.querySelector(".main_container");
const secondContainer = document.querySelector(".ty_container");
const values = document.querySelectorAll(".btn");
const submitButton = document.querySelector(".submit");
const tryAgainButton = document.querySelector(".try_again");
const actualRating = document.querySelector(".rating");

submitButton.addEventListener("click", function () {
  mainContainer.classList.add("hidden");
  secondContainer.classList.remove("hidden");

  values.forEach((value) => {
    value.addEventListener("click", function () {
      actualRating.innerHTML = value.innerHTML;
    });
  });
});

tryAgainButton.addEventListener("click", function () {
  mainContainer.classList.remove("hidden");
  secondContainer.classList.add("hidden");
});
