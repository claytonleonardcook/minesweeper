import { useState } from 'react';
import './Cell.css';

function Cell({ position: { x, y }, minesweeper: { grid } }) {
    const [toggle, setToggle] = useState(true);
    return (
        <th className="Cell" onClick={({ target }) => {
            if (toggle) {
                console.log(x,y);
                target.innerHTML = grid[y][x];
                setToggle(false);
            }
        }}></th >
    )
}

export default Cell;