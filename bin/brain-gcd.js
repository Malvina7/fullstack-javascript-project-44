#!/usr/bin/env node
import { runGame } from '../src/game-engine.js';
import game from '../src/games/gcd.js';

console.log('Welcome to the Brain Games!');
console.log('Find the greatest common divisor of given numbers.');

runGame(game);
