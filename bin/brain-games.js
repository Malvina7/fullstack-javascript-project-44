#!/usr/bin/env node

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to the Brain Games!');

const roundsCount = 3;
let round = 0;
let playerName = '';

function askName() {
  rl.question('May I have your name? ', (name) => {
    playerName = name.trim();
    if (playerName === '') {
      console.log('Please enter a name.');
      askName();
      return;
    }
    console.log(`Hello, ${playerName}!`);
    askNextQuestion();
  });
}

function generateRound() {
  const start = Math.floor(Math.random() * 10) + 1;
  const step = Math.floor(Math.random() * 5) + 2;
  const length = 6;

  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }

  const missingIndex = Math.floor(Math.random() * length);
  const correctAnswer = String(progression[missingIndex]);

  const questionParts = progression.map((num, index) =>
    index === missingIndex ? '..' : String(num)
  );

  return {
    question: questionParts.join(' '),
    correctAnswer,
  };
}

function askNextQuestion() {
  if (round >= roundsCount) {
    console.log(`Congratulations, ${playerName}!`);
    rl.close();
    return;
  }

  const { question, correctAnswer } = generateRound();
  console.log(`Question: ${question}`);

  rl.question('Your answer: ', (answer) => {
    if (answer.trim() === correctAnswer) {
      console.log('Correct!');
      round++;
      askNextQuestion();
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      rl.close();
    }
  });
}

askName();
