export default class MineSweeper {
    constructor(size = 2, numOfMines = 1) {
        this.size = size;
        this.numOfMines = numOfMines;
        this.grid = [];
        this.generateGrid();
        this.generateMines();
    }

    generateGrid() {
        for (let y = 0; y < this.size; y++) {
            let row = [];
            for (let x = 0; x < this.size; x++) {
                row.push('🌳');
            }
            this.grid.push(row);
        }
    }

    generateMines() {
        for (let i = 0; i < this.numOfMines; i++) {
            const x = Math.round(Math.random() * (this.size - 1)),
                y = Math.round(Math.random() * (this.size - 1));
            if (this.grid[y][x] != '💣') {
                this.grid[y][x] = '💣';
            } else {
                i--;
            }
        }
    }
}