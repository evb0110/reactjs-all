import React from 'react';
import './Char.css';

const char = (props) => {
  const style = {
    display: 'inline-block',
    padding: '16px',
    margin: '16px',
    border: '1px solid black',
    textAlign: 'center'
  }
  return (
    <div className="Char" style={style} onClick={props.clicked}>
      {props.character}
    </div>
  )
}

export default char;
