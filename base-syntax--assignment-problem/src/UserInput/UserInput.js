import React from 'react';

const userInput = (props) => {
  return (
    <div className="UserInput">
      <span>Enter your name: </span>
      <input
      type='text'
      className="input"
      onChange={props.changed}
      value={props.username} />
    </div>

  );
}

export default userInput;
