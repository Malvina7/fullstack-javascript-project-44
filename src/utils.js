import readlineSync from 'readline-sync';

export const askQuestion = (question) => readlineSync.question(question);

export const getRandomInt = (min, max) => {
  const lower = Math.ceil(min);
  const upper = Math.floor(max);
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};