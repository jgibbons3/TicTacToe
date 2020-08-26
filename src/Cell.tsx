import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCircle } from "@fortawesome/free-solid-svg-icons";


type CellProps = {
  value: number;
  playCell?: () => void;
};

const Cell = ({ value, playCell }: CellProps) => {

  return (
    <div className={`Board-cell${value ? " played" : ""}`} onClick={playCell}>
      {!!value && <FontAwesomeIcon icon={value === 1 || value === 3 ? faTimes : faCircle}
        color={value === 3 || value === 2 ? "red" : value === 1 ? "greenyellow" : "lightskyblue"} size={"5x"} />}
    </div>
  );
};

export default Cell;
