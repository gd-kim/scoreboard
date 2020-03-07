import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./Home";
import {Heroes} from "./Heroes";

import Menu from "./Menu";
import Scoreboard from "./scoreboard/Scoreboard";

export const Root = (props) => {
  return (
    <BrowserRouter>
       {/*path에 해당하는 컴포넌트 매핑*/}
       <Menu/>
       <Switch>
         <Route exact path="/" component={Home}></Route>
         <Route path="/heroes" component={Heroes}></Route>
         <Route path="/scoreboard" component={Scoreboard}></Route>
       </Switch>
    </BrowserRouter>
  )
}