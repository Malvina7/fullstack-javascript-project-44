// src/game-engine.js
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) => new Promise((resolve) => {
  rl.question(query, (answer) => resolve(answer));
});

const runGame = async (game) => {
  console.log('Welcome to the Brain Games!');
  const name = await askQuestion('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(game.description);

  const rounds = 3;
  for (let i = 0; i < rounds; i += 1) {
    const { question, answer } = game.generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = await askQuestion('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      rl.close();
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
  rl.close();
};

export { runGame };
