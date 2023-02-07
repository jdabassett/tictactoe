import React from 'react';
import Square from './Square.jsx';



export default class Board extends React.Component {

  renderSquare(i) {
    return <Square toggleTurn={this.props.toggleTurn} value={i}/>;
  }
  renderSquares() {
    const squareElements = this.props.squares.map((item,index)=>(
      <Square key={item.id} id={item.id} toggleTurn={this.props.toggleTurn} value={item.value} mark={this.props.mark} />
    ))
    return squareElements;
  }

  render() {
    // console.log(this.props.squares)
    const status = 'Next player: X';
    return (
      <div>
        <div className="status-container">{status}</div>
          <div className="squares-container">
          {this.renderSquares()}
          </div>
        
      </div>
    );
  }
}