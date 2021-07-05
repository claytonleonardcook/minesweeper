export default function checkNeighbors(grid = [], x = 0, y = 0) {
    let numberOfMines = 0;
    for (let localY = -1; localY <= 1; localY++) {
        let newY = y + localY;
        if (newY < 0 || newY >= grid.length) continue;
        for (let localX = -1; localX <= 1; localX++) {
            let newX = x + localX;
            if (newX < 0 || newX >= grid.length || (localX === 0 && localY === 0)) continue;
            console.log(document.querySelector(`.Cell[x='${newX}'][y='${newY}']`));
            numberOfMines += grid[newY][newX] === '💣' ? 1 : 0;
        }
    }
    return numberOfMines;
}