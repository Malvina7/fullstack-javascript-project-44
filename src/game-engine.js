import { askQuestion } from './utils.js';

const ROUNDS_COUNT = 3;

const runGame = async (game) => {
  console.log('Welcome to the Brain Games!');
  console.log(game.description);

  const userName = await askQuestion('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const { question, answer } = game.generateRound();
    console.log(`Question: ${question}`);

    const userAnswer = await askQuestion('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(
        `"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export { runGame };