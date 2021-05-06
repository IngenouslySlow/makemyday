const button = document.querySelector("button");
const header = document.querySelector("h1");
const input = document.querySelector(".input");

button.addEventListener("click", function () {
  fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
    .then((obj) => obj.json())
    .then((data) => {
      input.innerText = data.slip.advice;
    });
  header.innerText = "Made your day";
});
