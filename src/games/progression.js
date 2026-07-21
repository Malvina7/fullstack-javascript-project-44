// src/games/progression.js
import { getRandomInt } from '../utils.js';
import {
  PROGRESSION_MIN_START,
  PROGRESSION_MAX_START,
  PROGRESSION_MIN_STEP,
  PROGRESSION_MAX_STEP,
  UNIT,
  ZERO
} from '../constants.js';

const generateProgression = (start, step, length) => {
  const result = [];
  for (let i = ZERO; i < length; i += UNIT) {
    result.push(start + i * step);
  }
  return result;
};

const generateRound = () => {
  const start = getRandomInt(PROGRESSION_MIN_START, PROGRESSION_MAX_START);
  const step = getRandomInt(PROGRESSION_MIN_STEP, PROGRESSION_MAX_STEP);
  const length = 10;
  const progression = generateProgression(start, step, length);

  const missingIndex = getRandomInt(ZERO, length - UNIT);
  const missingNumber = progression[missingIndex];

  const displayProgression = [...progression];
  displayProgression[missingIndex] = '..';

  const question = displayProgression.join(' ');
  const answer = String(missingNumber);
  return { question, answer };
};

export default {
  description: 'What number is missing in the progression?',
  generateRound,
};
