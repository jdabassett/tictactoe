import React from 'react';
import './index.css';
import Board from './components/Board.jsx';


export default class Game extends React.Component{
  constructor(props){
    super(props)
    this.state={
        squares:[{id:0,value:null},{id:1,value:null},{id:2,value:null},{id:3,value:null},{id:4,value:null},{id:5,value:null},{id:6,value:null},{id:7,value:null},{id:8,value:null}],

        turnNumber:0,
        playerXTurn:true,
        mark:"X",

        checkArrays:[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],

        winner:null
    }
    }
  
  judgeWin(markReturned) {
    this.state.checkArrays.map(array => (
      console.log([
        this.state.squares[array[0]].value,
        this.state.squares[array[1]].value,
        this.state.squares[array[2]].value])
    ));

    console.log('judgeWin',markReturned);
  }


  toggleTurn = (idReturned,markReturned) =>{

    console.log("toggleTurn",markReturned,idReturned)

    this.setState(prevState => prevState.squares.map((item,index)=>(((item.id===idReturned)&&(!item.value)) ? item.value=markReturned : {...item} )))

    this.setState(prevState => (
      {playerXTurn:!prevState.playerXTurn, 
        turnNumber:prevState.turnNumber+1,
        mark:(prevState.turnNumber%2===0) ? "O":"X"}),
        this.judgeWin(markReturned));

    // this.judgeWin(markReturned);
      
  }




  render() {

    return(
      <div className="game-container">
        <div className="board-container">
          <Board 
            mark={this.state.mark}
            squares={this.state.squares}
            toggleTurn={this.toggleTurn}
          />
        </div>
        <div className="info-container">
          <div>{/*status*/}</div>
          <div>{/*TODO*/}</div>
        </div>
      </div>
    )
  }
}