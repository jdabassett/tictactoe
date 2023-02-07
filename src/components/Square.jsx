import React from 'react';

export default class Square extends React.Component {
  render() {
    return (
      <button 
        className="square"
        onClick={()=>(this.props.toggleTurn(this.props.id,this.props.mark))}
        >
        {this.props.value}
      </button>
    );
  }
}