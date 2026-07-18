#!/usr/bin/env node
import { runGame } from '../src/game-engine.js';
import game from '../src/games/calc.js';

await runGame(game);
