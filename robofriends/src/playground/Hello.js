import React from 'react';
import './Hello.css';


const hello = (props) => {
  return (
    <div>
      <h1 className='f1 tc'>Hello World!</h1>
      <p className='f2 tl'>Welcome to React</p>
      <p className='f3 tr'>{props.greeting}</p>
    </div>
  );
};

export default hello;