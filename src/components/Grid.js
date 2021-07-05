import Cell from './Cell';
import MineSweeper from '../classes/MineSweeper';
import './Grid.css';

function Grid() {
    let minesweeper = new MineSweeper(20, 200);
    return (
        <table className="Grid">
            <tbody>
                {
                    minesweeper.grid.map((row, y) => {
                        return (
                            <tr key={y} className={`row y`}>
                                {
                                    row.map((cell, x) => {
                                        return (<Cell position={{ x, y }} key={x} minesweeper={minesweeper} />)
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