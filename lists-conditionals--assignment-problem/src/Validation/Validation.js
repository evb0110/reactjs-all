import React from 'react';

const limit = 5;

const validation = (props) => {
  let message = 'OK';
  if (props.inputLength < limit) {
    message = 'Text too short'
  }
  return (
    <div>
      <p>{message}</p>
    </div>

  )
}

export default validation;
