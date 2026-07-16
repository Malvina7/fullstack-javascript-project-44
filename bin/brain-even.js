#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { runGame } from '../src/game-engine.js';
import evenGame from '../src/games/even.js';

runGame(evenGame);
