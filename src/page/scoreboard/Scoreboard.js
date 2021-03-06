import React from 'react';
import {Header} from "../../components/Header";
import {CustomPlayer} from "../../components/CustomPlayer";
import AddPlayerForm from "../../components/AddPlayerForm";
import {useSelector} from "react-redux";
import _ from "lodash";

function Scoreboard () {
  const players = useSelector(state => state.player.players);

  const getHighscore = () => {
    const highscore =  _.maxBy(players, 'score').score;
    return highscore ? highscore : null;
  }
  return (
    <div className="scoreboard">
      <Header title="My Scoreboard" players={players}/>

      {
        players.map(player => (
          <CustomPlayer name={player.name} score={player.score} id={player.id} key={player.id}
                        isHighScore={getHighscore() === player.score}
          />
        ))
      }

      <AddPlayerForm></AddPlayerForm>
    </div>
  );
}
export default Scoreboard;