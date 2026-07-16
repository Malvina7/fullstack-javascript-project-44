import { getRandomInt } from '../utils.js';

const generateRound = () => {
  const number = getRandomInt(1, 100);
  const question = String(number);
  const answer = number % 2 === 0 ? 'yes' : 'no';
  return { question, answer };
};

export default generateRound;
