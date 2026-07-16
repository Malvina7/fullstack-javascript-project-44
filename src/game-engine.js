// src/game-engine.js
import figlet from 'figlet';
import readlineSync from 'readline-sync';

const printBanner = () => {
  return new Promise((resolve) => {
    figlet.text('Brain Games', (err, data) => {
      if (err) {
        console.error(err);
        resolve('');
      } else {
        console.log(data);
        resolve(data);
      }
    });
  });
};

export const runGame = async (game) => {
  await printBanner();

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const { description, generateRound } = game;
  console.log(description);

  const rounds = 3;
  for (let i = 0; i < rounds; i += 1) {
    const round = generateRound();
    // На случай, если generateRound не возвращает объект — защита от той самой ошибки
    if (!round || typeof round.question !== 'string' || typeof round.answer !== 'string') {
      console.error('Ошибка: generateRound должен возвращать { question, answer }');
      return;
    }

    const { question, answer } = round;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`${name}, let's try again`);
      return; // поражение: выходим из игры
    }
  }

  console.log(`Congratulations, ${name}!`); // победа
};
