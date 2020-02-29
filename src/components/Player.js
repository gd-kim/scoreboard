import React from "react";
import {Counter} from "./Counter";

export class Player extends React.PureComponent {
  render() {
    console.log(this.props.name, ' rendered');
    const {id,name,score,removePlayer,changeScore} = this.props;
    return (
      <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>x</button>
      </span>
        <span className="player-name">
        {this.props.name}
      </span>
        <Counter score={this.props.score} id={this.props.id} changeScore={this.props.changeScore} />
      </div>
    );
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log('componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate', nextProps);
    return nextProps.score !== this.props.score;
  }
}