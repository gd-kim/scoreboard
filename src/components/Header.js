import React from "react";
import {Statistics} from "./Statistics";
import {Stopwatch} from "./Stopwatch";

export const Header = ({players,title}) => {

  return (
    <header className="header">
      <Statistics players={players}/>
      <h1 className="h1">{title}</h1>
      <Stopwatch/>
    </header>
  );
}