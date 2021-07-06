export default function createGrid(size = 3, numberOfMines = 0) {
    let grid = [];

    for (let y = 0; y < size; y++) {
        let row = [];
        for (let x = 0; x < size; x++) {
            row.push({ data: 0, toggled: false });
        }
        grid.push(row);
    }

    for (let i = 0; i < numberOfMines; i++) {
        const x = Math.round(Math.random() * (size - 1)),
            y = Math.round(Math.random() * (size - 1));
        if (grid[y][x].data !== 1) {
            grid[y][x].data = 1;
        } else {
            i--;
        }
    }

    return grid;
}