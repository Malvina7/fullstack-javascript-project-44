# Brain Games

Консольные мини‑игры на Node.js. Проект для Хекслета (Вариант Б: CLI‑библиотека).

[![Node.js CI](https://github.com/Malvina7/brain-games-fresh/actions/workflows/node.js.yml/badge.svg)](https://github.com/Malvina7/brain-games-fresh/actions)
[![JavaScript Style Guide](https://img.shields.io/badge/style-eslint-blue)](https://eslint.org/)

## Что внутри

Сейчас в проекте реализована базовая архитектура CLI‑игр и одна игра:
- **Движок игры** (`src/game-engine.js`) — универсальная логика: приветствие, вопрос, проверка ответа, счётчик побед.
- **Игра «Чётное число»** (`src/games/even.js`) — классическая первая игра из трека Хекслет.
- **Точка входа CLI** (`bin/brain-games.js`) — скрипт, который запускается командой `brain-games`.

Архитектура спроектирована так, чтобы легко добавлять новые игры: достаточно создать новый файл в `src/games/` с полями `description` и `generateRound`.

## 🚀 Как запустить проект

### Если ты клонируешь проект впервые

```bash
git clone git@github.com:Malvina7/brain-games-fresh.git
cd brain-games-fresh
npm ci
brain-even```
## 🎬 Демонстрация работы

[Смотреть видео (mp4)](assets/demo.mp4)
