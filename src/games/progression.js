const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;
};

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }
  return progression;
};

export const gameDescription = 'What number is missing in the progression?';

export const generateRound = () => {
  const start = getRandomInt(-50, 50);
  const step = getRandomInt(1, 10);
  const length = getRandomInt(5, 10);

  const progression = generateProgression(start, step, length);
  const hiddenIndex = getRandomInt(0, length - 1);
  const correctAnswer = String(progression[hiddenIndex]);

  const question = progression
    .map((num, index) => (index === hiddenIndex ? '..' : String(num)))
    .join(' ');

  return { question, answer: correctAnswer };
};
