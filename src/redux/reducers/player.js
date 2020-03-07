import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER} from "../actionTypes";

const playerInitialState = {
  players: [
    {name: 'LDK', score: 5, id: 1},
    {name: 'HONG', score: 6, id: 2},
    {name: 'KIM', score: 7, id: 3},
    {name: 'PARK', score: 8, id: 4}
  ]
};
let maxId = 4;

export const player = (state = playerInitialState, action) => {
  let players;
  switch(action.type) {
    case ADD_PLAYER:
      // 기존 배열을 deep copy하여 새로운 배열을 생성
      players = [ ...state.players ];
      players.push({
        name: action.name,
        score: 0,
        id: ++maxId
      })
      return {
        ...state,
        players
      }
    case CHANGE_SCORE:
      players = [ ...state.players ];
      players.forEach(player => {
        if (player.id === action.id) {
          player.score += action.delta
        }
      })
      return {
        ...state,
        players
      }
    case REMOVE_PLAYER:
      let players = state.players.filter(player => player.id !== action.id);
      return {
        ...state,
        players
      }
  }

  return state;
}