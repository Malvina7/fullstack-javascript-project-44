import { getRandomInt } from '../utils.js';
import { MIN_NUMBER, MAX_NUMBER } from '../constants.js';
import { FIRST_PRIME_CANDIDATE, ZERO, UNIT } from '../constants.js';  // ← добавили

const isPrime = (num) => {
  if (num < FIRST_PRIME_CANDIDATE) return false;  // ← заменили 2 на FIRST_PRIME_CANDIDATE
  for (let i = FIRST_PRIME_CANDIDATE; i * i <= num; i += UNIT) {  // ← заменили 2 и 1
    if (num % i === ZERO) return false;  // ← заменили 0 на ZERO
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
