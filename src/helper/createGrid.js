export default function createGrid(size = 3, numberOfMines = 0) {
    let grid = [];

    for (let y = 0; y < size; y++) {
        let row = [];
        for (let x = 0; x < size; x++) {
            row.push('🌳');
        }
        grid.push(row);
    }

    for (let i = 0; i < numberOfMines; i++) {
        const x = Math.round(Math.random() * (size - 1)),
            y = Math.round(Math.random() * (size - 1));
        if (grid[y][x] !== '💣') {
            grid[y][x] = '💣';
        } else {
            i--;
        }
    }

    return grid;
}