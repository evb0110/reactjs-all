import React from 'react';

const style = {
  backgroundColor: 'yellow',
  padding: '7px',
  margin: 'auto',
  marginBottom: '15px',
  fontSize: '20px',
  width: '60%',
  textAlign: 'center',
};

const userOutput = (props) => {
  return (
    <div style={style}>
      <p>Name: <b>{props.username}</b></p>
      <p>Here will be something useless</p>
    </div>
  );
};

export default userOutput;
