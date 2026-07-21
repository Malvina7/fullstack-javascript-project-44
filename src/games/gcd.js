// src/games/gcd.js
import { getRandomInt } from '../utils.js';
import { MIN_NUMBER, MAX_NUMBER } from '../constants.js';

const getGCD = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const generateRound = () => {
  const a = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const b = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const question = `${a} ${b}`;
  const answer = String(getGCD(a, b));
  return { question, answer };
};

export default {
  description: 'Find the greatest common divisor of given numbers.',
  generateRound,
};
