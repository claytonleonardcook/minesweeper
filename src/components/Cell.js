import checkNeighbors from '../helper/checkNeighbors';
import createGrid from '../helper/createGrid';
import './Cell.css';

function Cell({ x, y, grid: [grid, setGrid], alive: [alive, setAlive] }) {
    const { data, toggled } = grid[y][x];
    return (
        <th
            className="Cell"
            x={x}
            y={y}
            style={{
                animation: (!alive && data === 1) ? `shake ${Math.random() / 10 + 0.05}s none 0s 10` : 'none',
                backgroundColor: toggled ? '#FFF0' : ''
            }}
            onClick={() => {
                if (!toggled) {
                    if (data) {
                        setAlive(false);
                    }
                    const newGrid = [...grid];
                    newGrid[y][x].toggled = true;
                    setGrid(newGrid);

                }
            }}>{toggled ? (data ? '💣' : checkNeighbors(grid, x, y)) : ''}</th >
    )
}

export default Cell;