import React from "react";
import Cell from "./Cell";
import { Result } from "./Types";

type BoardProps = {
  values: number[][];
  result: Result;
  playCell: (row: number, cell: number) => void;
};

const Board = ({ values, playCell }: BoardProps) => {
  return (
    <div className="Board">
      {values.map((rowValues, row) => (
        <div key={row} className="Board-row">
          {rowValues.map((rowValue, col) => (
            <Cell
              key={col}
              value={rowValue}
              playCell={() => playCell(row, col)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
