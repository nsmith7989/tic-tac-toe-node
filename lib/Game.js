import Board from './Board.js';
import CoreX from './core_extensions.js';
import readline from 'readline-sync';


export default class Game {

    constructor(players) {
        this.players = players;
        this.board = new Board();
        [this.currentPlayer, this.otherPlayer] = this.players.shuffle();
    }

    switchPlayers() {
        [this.currentPlayer, this.otherPlayer] = [this.otherPlayer, this.currentPlayer];
    }

    solicitMove() {
        return `${this.currentPlayer.name} (${this.currentPlayer.color}) Enter a number between 1 and 9 to make your move:  `;
    }

    invalidMove() {
        return 'Already taken, choose another cell';
    }

    getMove(humanMove) {
        return this.humanMoveToCoordinate(humanMove);
    }

    humanMoveToCoordinate(humanMove) {
        let mapping = {
            '1': [0, 0],
            '2': [1, 0],
            '3': [2, 0],
            '4': [0, 1],
            '5': [1, 1],
            '6': [2, 1],
            '7': [0, 2],
            '8': [1, 2],
            '9': [2, 2]
        };
        return mapping[humanMove];
    }

    gameOverMessage() {
        if (this.board.gameOver() == 'winner') {
            return `${this.currentPlayer.name} won!`
        }
        return 'The game ended in a tie'
    }


    getValidMove() {
        while (true) {
            let humanMove = readline.question(this.solicitMove());
            let [x,y] = this.getMove(humanMove);
            if (this.board.getCell(x, y).value === '') {
                return [x, y]
            } else {
                console.log('Not a valid move');
            }
        }
    }


    play() {
        console.log(`${this.currentPlayer.name} has randomly selected as the first player`);
        while (true) {
            this.board.formattedGrid();
            console.log("\n");
            let [x,y] = this.getValidMove();
            this.board.setCell(x,y, this.currentPlayer.color);
            if(this.board.gameOver()) {
                console.log(this.gameOverMessage());
                this.board.formattedGrid();
                return;
            } else {
                this.switchPlayers();
            }
        }
    }

}