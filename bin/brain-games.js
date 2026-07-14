#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { isEven, generateNumber, getGameDescription } from '../src/index.js';

const roundsCount = 3;

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log(getGameDescription());

for (let i = 0; i < roundsCount; i += 1) {
  const number = generateNumber();
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');

  const correctAnswer = isEven(number) ? 'yes' : 'no';

  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    process.exit(1);
  }
}

console.log(`Congratulations, ${name}!`);