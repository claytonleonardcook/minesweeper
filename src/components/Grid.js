import Cell from './Cell';
import './Grid.css';
import { useState } from 'react';
import createGrid from '../helper/createGrid';

function Grid() {
    const [grid, setGrid] = useState(createGrid(5, 10));
    console.log(grid);
    return (
        <table className="Grid">
            <tbody>
                {
                    grid.map((row, y) => {
                        return (
                            <tr key={y} className={`row y`}>
                                {
                                    row.map((cell, x) => {
                                        return (<Cell key={x} x={x} y={y} grid={grid} setGrid={setGrid} />)
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Grid;