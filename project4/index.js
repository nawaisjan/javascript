let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
//const guessSlot = document.querySelector("guesses");
const guessSlot = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");
//const remainig = document.querySelector("lastResult");

const p = document.createElement("p");

let preGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("please enter a valid");
  } else if (guess < 1) {
    alert("please enter a valid");
  } else if (guess > 100) {
    alert("please enter a nmber less than 100 ");
  } else {
    preGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over. random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGues(guess);
    }
    //
  }
}

function checkGues(guess) {
  if (guess === randomNumber) {
    displayMessage(`you guessed it Right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is Too high`);
  }
  //
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  lastResult.innerHTML = `${11 - numGuess}`;
  //
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;

  //
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new  Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
  //
}
function newGame() {
  const newGameBtn = document.querySelector("#newGame");
  newGameBtn.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    preGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    lastResult.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
  //
}
//---------------//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\/
