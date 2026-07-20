# Brain Games

Консольные мини‑игры на Node.js. Проект для Хекслета (Вариант Б: CLI‑библиотека).

[![Node.js CI](https://github.com/Malvina7/brain-games-fresh/actions/workflows/node.js.yml/badge.svg)](https://github.com/Malvina7/brain-games-fresh/actions)
[![JavaScript Style Guide](https://img.shields.io/badge/style-eslint-blue)](https://eslint.org/)

## Что внутри

В проекте реализована базовая архитектура CLI‑игр и три игры:

- **Движок игры** (`src/game-engine.js`) — универсальная логика: приветствие, вопрос, проверка ответа, счётчик раундов.
- **Игра «Чётное число»** (`src/games/even.js`) — классическая первая игра из трека Хекслет.
- **Игра «Калькулятор»** (`src/games/calc.js`) — считаем выражения с `+`, `-`, `*`.
- **Игра «Наибольший общий делитель»** (`src/games/gcd.js`) — нужно найти НОД двух чисел.
- **Точки входа CLI**: `bin/brain-even.js` (команда `brain-even`), `bin/brain-calc.js` (команда `brain-calc`) и `bin/brain-gcd.js` (команда `brain-gcd`).

Архитектура спроектирована так, чтобы легко добавлять новые игры: достаточно создать новый файл в `src/games/` с полями `description` и `generateRound`.


## 🚀 Как запустить проект

### Если ты клонируешь проект впервые


```bash
git clone git@github.com:Malvina7/brain-games-fresh.git
cd brain-games-fresh
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