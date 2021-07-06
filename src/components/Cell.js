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
                animation: (!alive && data === 1) ? `shake 0.5s ease-in 0s forwards` : 'none',
                backgroundColor: toggled ? '#FFF0' : '',
                height: `${((window.innerHeight > window.innerWidth ? window.innerWidth : window.innerHeight) - 100) / grid.length}px`,
                width: `${((window.innerHeight > window.innerWidth ? window.innerWidth : window.innerHeight) - 100) / grid.length}px`
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