#!/usr/bin/env node
import { runGame } from '../src/game-engine.js';
import game from '../src/games/even.js';

await runGame(game);
