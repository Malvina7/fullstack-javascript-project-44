// src/games/even.js
import { getRandomInt } from '../utils.js';
import { MIN_NUMBER, MAX_NUMBER } from '../constants.js';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const number = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const question = String(number);
  const answer = isEven(number) ? 'yes' : 'no';
  return { question, answer };
};

export default {
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  generateRound,
};
