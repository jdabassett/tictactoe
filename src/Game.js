import React from 'react';
import './index.css';
import Board from './components/Board.jsx';


export default class Game extends React.Component{
  render() {
    return(
      <div className="game-container">
        <div className="board-container">
          <Board />
        </div>
        <div className="info-container">
          <div>{/*status*/}</div>
          <div>{/*TODO*/}</div>
        </div>
      </div>
    )
  }
}