const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const operators = ['+', '-', '*'];

const getRandomOperator = () => {
  const index = getRandomInt(0, operators.length - 1);
  return operators[index];
};

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    default: throw new Error('Unknown operator');
  }
};

const generateRound = () => {
  const a = getRandomInt(1, 100);
  const b = getRandomInt(1, 100);
  const operator = getRandomOperator();
  const question = `${a} ${operator} ${b}`;
  const answer = String(calculate(a, b, operator));

  return { question, answer };
};

export default {
  description: 'What is the result of the expression?',
  generateRound,
};
