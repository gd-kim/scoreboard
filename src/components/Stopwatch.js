import React from "react";

export class Stopwatch extends React.Component{
  tickRef;

  state = {
    isRunning: false,
    timer: 0
  }

  tick = () => {
    // isRunning이 true이면 timer를 1씩 증가
    if (this.state.isRunning) {
      this.setState(prevState => ({
        timer: prevState.timer + 1
      }))
    }
  }

  handleStopwatch = () => {
    this.setState(prevState => ({isRunning: !prevState.isRunning}));
  }

  handleReset = () => {
    this.setState({timer: 0});
  }

  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{this.state.timer}</span>
        {/* Conditional Rendering */}
        <button onClick={this.handleStopwatch}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }

  //Dom 이 렌더링된 직후에 리액트가 호출한다.
  // 예) Rest API 콜, 외부 라이브러리 로딩
  componentDidMount() {
    this.tickRef = setInterval(this.tick, 1000);
  }
  //Dom이 파괴되기 직전에 호출
  // 예) 리소스 해제
  componentWillUnmount() {
    clearInterval(this.tickRef);
  }
}