import './App.css';
import Cell from './components/Cell';
import createGrid from './helper/createGrid';
import { useState } from 'react';

function App() {
  const [alive, setAlive] = useState(true),
    [grid, setGrid] = useState(createGrid(8, (8*8)/2));
  return (
    <div className="App">
      <table className="Grid">
        <tbody>
          {
            grid.map((row, y) => {
              return (
                <tr key={y} className={`row y`}>
                  {
                    row.map((cell, x) => {
                      return (<Cell key={x} x={x} y={y} grid={[grid, setGrid]} alive={[alive, setAlive]} />)
                    })
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <div style={{ visibility: alive ? 'hidden' : 'visible' }}>
        <h2>Game Over</h2>
        <button onClick={() => {
          setGrid(createGrid(8, (8 * 8) / 4));
          setAlive(true);
        }}>New Game?</button>
      </div>
    </div>
  );
}

export default App;
