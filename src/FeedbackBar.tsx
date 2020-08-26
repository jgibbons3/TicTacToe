import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCircle } from "@fortawesome/free-solid-svg-icons";
import { Result } from "./Types";


type FeedbackBarProps = {
  player: number;
  result: Result;
  resetGame: () => void;
};

const FeedbackBar = ({ player, resetGame, result }: FeedbackBarProps) => {
  return (
    <div className="FeedbackBar">
      {result.draw ? <div className="draw-message">Its a draw</div> : result.winPlayer ?
        <div className="draw-message">Player {result.winPlayer} won</div> :
        <div className="FeedbackBar-message">
          {/*changed style. Added score */}
          <div className="FeedbackBar-players">
            <div className="FeedbackBar-player-A">
              <span>
                Player A <FontAwesomeIcon icon={faTimes} />
              </span>
            </div>

            <div className="FeedbackBar-player-B">
              <span>
                Player B <FontAwesomeIcon icon={faCircle} />
              </span>
            </div>
          </div>
          <div className={player === 1 ? "FeedbackBar-playing-A" : "FeedbackBar-playing-B"}>
            Turn to play: Player {player === 1 ? "A" : "B"} <FontAwesomeIcon icon={player === 1 ? faTimes : faCircle}
              className="turn-to-play-icon" />
          </div>
        </div>}
      <div className="FeedbackBar-button">
        <button className="reset-start-button" onClick={resetGame}>
          {result.draw || result.winPlayer ? "New Game" : "Reset Game"}
        </button>
      </div>
    </div>
  );
};

export default FeedbackBar;
