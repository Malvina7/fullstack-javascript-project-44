
import { runGame } from '../src/game-engine.js';

const getGCD = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;
};

const generateRound = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const answer = String(getGCD(num1, num2));
  const question = `${num1} ${num2}`;
  // Важно: именно answer, а не correctAnswer
  return { question, answer };
};

const game = {
  description: 'Find the greatest common divisor of given numbers.',
  generateRound,
};

runGame(game);
