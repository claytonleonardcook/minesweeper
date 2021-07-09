import checkNeighbors from '../helper/checkNeighbors';
import floodEmpty from '../helper/floodEmpty';
import './Cell.css';

function Cell({ x, y, states: { started: [started, setStarted], grid: [grid, setGrid], alive: [alive, setAlive] } }) {
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
                    if (!started) {
                        setStarted(true);
                        const newGrid = [...grid];
                        newGrid[y][x].data = 0;
                        newGrid[y][x].toggled = true;
                        setGrid(floodEmpty(newGrid, x, y));
                    } else {
                        if (data) {
                            setAlive(false);
                        } else {
                            const newGrid = [...grid];
                            newGrid[y][x].toggled = true;
                            setGrid(floodEmpty(newGrid, x, y));
                        }
                    }
                }
            }}>{toggled ? (data ? '💣' : checkNeighbors(grid, x, y)) : ''}</th >
    )
}

export default Cell;