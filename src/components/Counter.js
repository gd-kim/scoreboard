import React from "react";

export class Counter extends React.Component {
  //클래스 바로 아래에 선언되는 변수는 속성이 된다.
 /* constructor() {
    super();
    this.state = {
      score: 0
    };

    this.handleChange.bind(this);
  }*/
  handleChange(delta){
    this.setState(prevState=>{
      return {score:prevState.score+delta } //비동기로 동작
    });

  }
  /*
  plusScore = () => {
    // 값을 변경하고 UI도 렌더링할려면 반드시 setState로 변경
    this.setState(prevState=>{
      return {score:prevState.score+1 } //비동기로 동작
    });
  }
  minusScore= ()=>{
    // 값을 변경하고 UI도 렌더링할려면 반드시 setState로 변경
    this.setState(
      {
        score: this.state.score-1
      }

    );
  }

   */
  //이벤트 핸들러 오른쪽은 반드시 함수 선언문이 와야 한다.
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={()=>this.handleChange(-1)}> -</button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={()=>this.handleChange(+1)}> +</button>
      </div>
    );
  }
}