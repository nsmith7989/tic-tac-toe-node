import readline from 'readline-sync';
import Player from './lib/Player.js';
import Game from './lib/Game.js';

let player1Name = readline.question('Player 1 Name: ');
let player1 = new Player({name: player1Name, color: 'X'});

let player2Name = readline.question('Player 2 Name: ');
let player2 = new Player({name: player2Name, color: 'O'});

let game = new Game([player1, player2]);

game.play();