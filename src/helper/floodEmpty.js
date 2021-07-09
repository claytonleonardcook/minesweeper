import checkNeighbors from "./checkNeighbors";

export default function floodEmpty(grid, x, y) {
    for (let localY = -1; localY <= 1; localY++) {
        let newY = y + localY;
        if (newY < 0 || newY >= grid.length) continue;
        for (let localX = -1; localX <= 1; localX++) {
            let newX = x + localX;
            if (newX < 0 || newX >= grid.length || (localX === 0 && localY === 0)) continue;
            if (!checkNeighbors(grid, x, y) && !grid[newY][newX].toggled) {
                grid[newY][newX].toggled = true;
                grid = floodEmpty(grid, newX, newY);
            }
        }
    }
    return grid;
}