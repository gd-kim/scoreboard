import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Player} from './components/Player';



class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', score: 5,id:1},
      {name: 'HONG', score: 6, id:2},
      {name: 'KIM', score: 7, id:3},
      {name: 'PARK', score: 8, id:4},
    ]
  };

  handleRemove= (id) =>{
    console.log('handleRemove: ', id);
    this.setState(prevState =>{
      const players = prevState.players.filter(player=>player.id !== id);
      return {players}; //*** es6 short hand property : 키와 값이 같으면 한쪽을 생략
    })
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" totalPlayers={11}/>
        {
          this.state.players.map(player=>(
            <Player name={player.name} score={player.score} id={player.id} key={player.id}
                    removePlayer={this.handleRemove}/>
          ))
        }
      </div>
    );
  }

}

export default App;
