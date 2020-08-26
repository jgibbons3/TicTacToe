import React, { useState } from "react";
import "./App.scss";
import Board from "./Board";
import FeedbackBar from "./FeedbackBar";
import { Result } from "./Types";

/**
  Try to find the winner, or if there is a draw
*/
export const getResult = (values: number[][]): Result => {
  if (tictactoe(values, -1)) {
    return { winPlayer: 'B' }
  }
  if (tictactoe(values, 1)) {
    return { winPlayer: "A" }
  }
  if (!values[0].includes(0) && !values[1].includes(0) && !values[2].includes(0)) {
    return { draw: true }
  }
  return {};
};

export const tictactoe = (values: number[][], player: number) => {
  if (checkLine(0, 0, 0, 1, values, player)) {
    return true
  }
  if (checkLine(1, 0, 0, 1, values, player)) {
    return true
  }
  if (checkLine(2, 0, 0, 1, values, player)) {
    return true
  }
  if (checkLine(0, 0, 1, 0, values, player)) {
    return true
  }
  if (checkLine(0, 1, 1, 0, values, player)) {
    return true
  }
  if (checkLine(0, 2, 1, 0, values, player)) {
    return true
  }
  if (checkLine(0, 0, 1, 1, values, player)) {
    return true
  }
  if (checkLine(2, 0, -1, 1, values, player)) {
    return true
  }
  return false
}

export const checkLine = (posX: number, posY: number, dirX: number, dirY: number, values: number[][], player: number) => {
  let winCells = 3
  if (values[posY][posX] === player &&
    values[posY + dirY][posX + dirX] === player &&
    values[posY + dirY * 2][posX + dirX * 2] === player) {
    if (player === 1) {
      winCells = 3
    } else {
      winCells = 2
    }
    values[posY][posX] = winCells
    values[posY + dirY][posX + dirX] = winCells
    values[posY + dirY * 2][posX + dirX * 2] = winCells
    return true
  }
  return false
}

const App: React.FC = () => {
  // Values for the board cells
  // 0 = Not played
  // 1 = played by player X
  // -1 = played by player O
  const [values, setValues] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]);
  const [player, setPlayer] = useState(1);


  const playCell = (row: number, col: number) => {
    // if there is a winner the field are not longer enabled
    if (result.winPlayer) {
      return
    }
    // you can only play on an empty cell
    if (values[row][col] === 0) {
      values[row][col] = player;
      setValues(values);
      setPlayer(-player);
    }
  };

  const resetGame = () => {
    // setValues to 0
    setValues([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ])
  };

  const result: Result = getResult(values);

  return (
    <div className="App">
      <div className="App-center">
        <FeedbackBar {...{ player, result, resetGame }} />
        <Board {...{ values, result, playCell }} />
      </div>
    </div>
  );
};

export default App;
