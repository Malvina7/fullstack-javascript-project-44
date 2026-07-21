// src/games/calc.js
import { getRandomInt } from '../utils.js';
import { MIN_NUMBER, MAX_NUMBER, ZERO, UNIT } from '../constants.js';

const operations = ['+', '-', '*'];

const calculate = (a, b, op) => {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};

const generateRound = () => {
  const a = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const b = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const opIndex = getRandomInt(ZERO, operations.length - UNIT);
  const op = operations[opIndex];
  const question = `${a} ${op} ${b}`;
  const answer = String(calculate(a, b, op));
  return { question, answer };
};

export default {
  description: 'What is the result of the expression?',
  generateRound,
};
