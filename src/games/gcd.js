import { getRandomInt } from '../utils.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const getGCD = (a, b) => {
  let x = a;
  let y = b;

  while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
  }

  return x;
};

const generateRound = () => {
  const a = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const b = getRandomInt(MIN_NUMBER, MAX_NUMBER);

  const question = `Question: ${a} ${b}`;
  const answer = String(getGCD(a, b));

  return { question, answer };
};

export default {
  description: 'Find the greatest common divisor of given numbers.',
  generateRound,
};