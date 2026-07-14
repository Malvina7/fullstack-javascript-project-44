// src/index.js
export function isEven(num) {
  return num % 2 === 0;
}

export function generateNumber() {
  return Math.floor(Math.random() * 100);
}

export function getGameDescription() {
  return 'Answer "yes" if the number is even, otherwise answer "no".';
}