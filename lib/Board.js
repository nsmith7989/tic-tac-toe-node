import Cell from './Cell.js';
import coreHelpers from './core_extensions.js';

export default class Board {


    constructor() {
        this.grid = this.defaultGrid();
    }

    defaultGrid() {
        return [
            [new Cell(), new Cell(), new Cell()],
            [new Cell(), new Cell(), new Cell()],
            [new Cell(), new Cell(), new Cell()]
        ]
    }

    formattedGrid() {
        let cellCount = 0;
        this.grid.map((row) => {
            let formattedRow = row.map((cell) => {
                cellCount++;
                return cell.value || cellCount;
            });
            console.log(formattedRow.join(' '));
        });
    }

    getCell(x, y) {
        return this.grid[y][x];
    }

    setCell(x, y, value) {
        this.getCell(x,y).value = value
    }

    gameOver() {
        if (this.winner()) {
            return 'winner';
        } else if (this.draw()) {
            return 'draw';
        } else {
            return false
        }
    }

    /**
     * Checks that all spaces are filled by making sure that there are no spaces without a value
     * @returns {boolean}
     */
    draw() {
        return this.grid
                .flatten()
                .filter(item => !item.value)
                .length === 0;
    }

    winner() {
        let allWinningPositions = this.winningPositions();
        for (let winningPosition of allWinningPositions) {
            if (this.winningPositionValues(winningPosition).allEmpty()) {
                continue;
            } else if (this.winningPositionValues(winningPosition).allSame()) {
                return true;
            }
        }
        return false;
    }

    winningPositionValues(winningPosition) {
        return winningPosition.map(cell => cell.value);
    }

    winningPositions() {
        return this.grid.concat(this.grid.transpose(), this.diagonals())
    }

    diagonals() {
        return [
            [this.getCell(0,0), this.getCell(1,1), this.getCell(2,2)],
            [this.getCell(0,2), this.getCell(1,1), this.getCell(2,0)]
        ]
    }

}

