# Brain Games

Консольные мини‑игры на Node.js. Проект для Хекслета (CLI‑библиотека).

[![Hexlet Check](https://github.com/Malvina7/fullstack-javascript-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Malvina7/fullstack-javascript-project-44/actions)
[![JavaScript Style Guide](https://img.shields.io/badge/style-eslint-blue)](https://eslint.org/)


## Что внутри

В проекте реализована базовая архитектура CLI‑игр и пять игр:

- **Движок игры** (`src/game-engine.js`) — универсальная логика: приветствие, вопрос, проверка ответа, счётчик раундов.
- **Игра «Чётное число»** (`src/games/even.js`) — классическая первая игра из трека Хекслет.
- **Игра «Калькулятор»** (`src/games/calc.js`) — считаем выражения с `+`, `-`, `*`.
- **Игра «Наибольший общий делитель»** (`src/games/gcd.js`) — нужно найти НОД двух чисел.
- **Игра «Арифметическая прогрессия»** (`src/games/progression.js`) — нужно угадать пропущенное число в прогрессии (скрыто как `..`).
- **Игра «Простое ли число?»** (`src/games/prime.js`) — нужно ответить `yes`, если число простое, иначе `no`.

- **Точки входа CLI**: `bin/brain-even.js` (команда `brain-even`), `bin/brain-calc.js` (команда `brain-calc`), `bin/brain-gcd.js` (команда `brain-gcd`), `bin/brain-progression.js` (команда `brain-progression`), `bin/brain-prime.js` (команда `brain-prime`).

Архитектура спроектирована так, чтобы легко добавлять новые игры: достаточно создать новый файл в `src/games/` с полями `description` и `generateRound`.



## 🚀 Как запустить проект

### Если ты клонируешь проект впервые

```bash
git clone git@github.com:Malvina7/fullstack-javascript-project-44.git
cd fullstack-javascript-project-44
npm ci
```
---

## 🎮 Пример сессии (аскинема)

Ниже — пример работы игры:
Сценарий 1: Победа в brain-even


```text
$ brain-even
Welcome to the Brain Games!
May I have your name? Julia
Hello, Julia!
Answer "yes" if the number is even, otherwise answer "no".
Question: 79
Your answer: no
Correct!
Question: 7
Your answer: no
Correct!
Question: 37
Your answer: no
Correct!
Congratulations, Julia!
```
Сценарий 2: Поражение в brain-even
```text
$ brain-even
Welcome to the Brain Games!
May I have your name? Alex
Hello, Alex!
Answer "yes" if the number is even, otherwise answer "no".
Question: 42
Your answer: no
'no' is wrong answer ;(. Correct answer was 'yes'.
Let's try again, Alex!
```
Сценарий 3: Победа в brain-calc

```text
$ brain-calc
Welcome to the Brain Games!
May I have your name? Julia
Hello, Julia!
What is the result of the expression?
Question: 60 - 34
Your answer: 26
Correct!
Question: 10 * 10
Your answer: 100
Correct!
Question: 35 + 2
Your answer: 37
Correct!
Congratulations, Julia!
```
Сценарий 4: Поражение в brain-calc

```text
$ brain-calc
Welcome to the Brain Games!
May I have your name? Alex
Hello, Alex!
What is the result of the expression?
Question: 46 + 82
Your answer: 53
'53' is wrong answer ;(. Correct answer was '128'.
Let's try again, Alex!
```
Сценарий 5: Победа в brain-gcd

```text
$ brain-gcd
Welcome to the Brain Games!
May I have your name? Julia
Hello, Julia!
Find the greatest common divisor of given numbers.
Question: 94 75
Your answer: 1
Correct!
Question: 58 79
Your answer: 1
Correct!
Question: 44 100
Your answer: 4
Correct!
Congratulations, Julia!
```
Сценарий 6: Поражение в brain-gcd

```text
$ brain-gcd
Welcome to the Brain Games!
May I have your name? Alex
Hello, Alex!
Find the greatest common divisor of given numbers.
Question: 96 71
Your answer: 2
'2' is wrong answer ;(. Correct answer was '1'.
Let's try again, Alex!
```
Сценарий 7: Победа в brain-progression

```text
$ brain-progression
Welcome to the Brain Games!
May I have your name? Julia
Hello, Julia!
What number is missing in the progression?
Question: -42 -38 .. -30 -26
Your answer: -34
Correct!
Question: -21 -16 -11 -6 -1 ..
Your answer: 4
Correct!
Question: 37 47 57 .. 77
Your answer: 67
Correct!
Congratulations, Julia!
```
Сценарий 8: Поражение в brain-progression

```text
$ brain-progression
Welcome to the Brain Games!
May I have your name? Alex
Hello, Alex!
What number is missing in the progression?
Question: 24 26 28 30 32 34 ..
Your answer: 1
'1' is wrong answer ;(. Correct answer was '36'.
Let's try again, Alex!
```
Сценарий 9: Победа в brain-prime

```text
$ brain-prime
Welcome to the Brain Games!
May I have your name? Julia
Hello, Julia!
Answer "yes" if given number is prime. Otherwise answer "no".
Question: 7
Your answer: yes
Correct!
Question: 13
Your answer: yes
Correct!
Question: 47
Your answer: yes
Correct!
Congratulations, Julia!
```
Сценарий 10: Поражение в brain-prime

```text
$ brain-prime
Welcome to the Brain Games!
May I have your name? Alex
Hello, Alex!
Answer "yes" if given number is prime. Otherwise answer "no".
Question: 27
Your answer: yes
'yes' is wrong answer ;(. Correct answer was 'no'.
Let's try again, Alex!
```




