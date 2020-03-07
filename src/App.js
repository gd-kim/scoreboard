import React from 'react';
import {Header} from './components/Header';
import './App.css';
import Player from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";
import {connect} from "react-redux";

let maxId = 4;

function App(props) {

  return (
    <div className="scoreboard">
      <Header title="My Scoreboard" players={props.players}/>

      {
        props.players.map(player => (
          <Player name={player.name} score={player.score} id={player.id} key={player.id}
          />
        ))
      }

      <AddPlayerForm></AddPlayerForm>
    </div>
  );

}

const mapStateToProps = (state) => ({
  // 왼쪽은 props, 오른쪽은 store의 state
  players: state.player.players
});

export default connect(mapStateToProps, null)(App);
