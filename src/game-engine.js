import askQuestion from './ask-question.js';

const ROUNDS_COUNT = 3;

const runGame = async (game) => {
  console.log('Welcome to the Brain Games!');
  console.log(game.description);

  const userName = await askQuestion('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const rounds = ROUNDS_COUNT;

  for (let i = 0; i < rounds; i += 1) {
    const { question, answer } = game.generateRound();
    console.log(question);

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