import { useState } from 'react';
import checkNeighbors from '../helper/checkNeighbors';
import createGrid from '../helper/createGrid';
import './Cell.css';

function Cell({ x, y, grid, setGrid }) {
    const [toggle, setToggle] = useState(true);
    return (
        <th className="Cell" x={x} y={y} onClick={({ target }) => {
            if (toggle) {
                if (grid[y][x] === '💣') window.location.reload();
                target.innerHTML = checkNeighbors(grid, x, y);
                setToggle(false);
            }
        }}></th >
    )
}

export default Cell;