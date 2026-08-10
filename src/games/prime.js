import { getRandomInt } from '../utils.js';
import {
  MIN_NUMBER,
  MAX_NUMBER,
  FIRST_PRIME_CANDIDATE,
  ZERO,
  UNIT,
} from '../constants.js';

const isPrime = (num) => {
  if (num < FIRST_PRIME_CANDIDATE) return false;

  for (let i = FIRST_PRIME_CANDIDATE; i * i <= num; i += UNIT) {
    if (num % i === ZERO) return false;
  }

  return true;
};

const generateRound = () => {
  const number = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const question = String(number);
  const answer = isPrime(number) ? 'yes' : 'no';

  return { question, answer };
};

export default {
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  generateRound,
};