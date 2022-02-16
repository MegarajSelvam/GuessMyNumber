'use strict';

const generateRandomNumber = () => Math.trunc(Math.random() * 20) + 1;

let secretNumber = generateRandomNumber();
let score = 20; // State Variable
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  checkGuess();
});

document.querySelector('.again').addEventListener('click', function () {
  tryAgain();
});

const checkGuess = () => {
  const guessedNumber = Number(document.querySelector('.guess').value);

  // No Input Supplied
  if (!guessedNumber) {
    setMessage('No Number!');
    // When Player wins
  } else if (guessedNumber === secretNumber) {
    bingo();
    // When Guess is Wrong
  } else if (guessedNumber !== secretNumber) {
    score > 1
      ? wrongGuess(guessedNumber > secretNumber ? 'Too High' : 'Too Low')
      : gameLost();
  }
};

const tryAgain = () => {
  score = 20;
  secretNumber = generateRandomNumber();
  resetHTML();
  resetCSS(false);
};

const resetHTML = () => {
  // Secret Number
  setNumber('?');
  // User Input
  setGuess('');
  // Message
  setMessage('Start guessing...');
  // Score
  setScore(score);
  // High Score
  setHighScore(highScore);
};

const resetCSS = gameWon => {
  if (gameWon) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else {
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  }
};

const gameLost = () => {
  setMessage('You lost the game. Try Again');
  setScore(0);
};

const wrongGuess = message => {
  setMessage(message);
  score--;
  setScore(score);
};

const bingo = () => {
  highScore = highScore > score ? highScore : score;
  setNumber(secretNumber);
  setMessage('Correct Number');
  setHighScore(highScore);
  resetCSS(true);
};

const setScore = score => {
  document.querySelector('.score').textContent = score;
};

const setMessage = message => {
  document.querySelector('.message').textContent = message;
};

const setNumber = number => {
  document.querySelector('.number').textContent = number;
};

const setHighScore = highScore => {
  document.querySelector('.highscore').textContent = highScore;
};

const setGuess = guess => {
  document.querySelector('.guess').value = guess;
};
