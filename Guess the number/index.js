const bodyEl = document.querySelector("body");
const inputEl = document.getElementById("inputBox");
const userGuessUpdate = document.getElementById("textOutput");
let computerGuesses;
let userGuesses = [];
let maxGuess;

const init = () => {
  computerGuesses = Math.floor(Math.random() * 100);
  document.getElementById("newGameButton").style.display = "none";
  document.getElementById("gameArea").style.display = "none";
};

bodyEl.addEventListener("load", init());

const startGame = (mode) => {
  document.getElementById("gameArea").style.display = "block";
  document.getElementById("welcomeScreen").style.display = "none";
  if (mode === "easyMode") {
    maxGuess = 10;
  } else if (mode === "hardMode") {
    maxGuess = 5;
  }
};

const startNewGame = () => {
  document.getElementById("newGameButton").style.display = "inline-block";
  inputEl.setAttribute("disabled", true);
};

const compareGuess = () => {
  const userVal = Number(inputEl.value);

  userGuesses = [...userGuesses, userVal];

  document.getElementById("guesses").innerHTML = userGuesses;
  document.getElementById("attempts").innerHTML = userGuesses.length;

  if (userGuesses.length < maxGuess) {
    if (userVal > computerGuesses) {
      userGuessUpdate.innerHTML = "Your Guess is High 😲";
      inputEl.value = "";
    } else if (userVal < computerGuesses) {
      userGuessUpdate.innerHTML = "Your Guess is low 😫";
      inputEl.value = "";
    } else {
      userGuessUpdate.innerHTML = "It's Correct 🎉";
      inputEl.value = "";
      startNewGame();
    }
  } else {
    if (userVal === computerGuesses) {
      userGuessUpdate.innerHTML = "It's Correct 🎉";
      inputEl.value = "";
      startNewGame();
    } else {
      userGuessUpdate.innerHTML = `Oops!! You loose 😖 <br> Correct Answer is ${computerGuesses}`;
      inputEl.value = "";
      startNewGame();
    }
  }
};

document.getElementById("newGameButton").addEventListener("click", () => {
  window.location.reload();
});

const easyMode = () => {
  startGame("easyMode");
};

const hardMode = () => {
  startGame("hardMode");
};
