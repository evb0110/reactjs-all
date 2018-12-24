import React from 'react';
import ReactDOM from 'react-dom';

function MyThing() {
  return  (
    <div className='book'>
      <div className='title'>
        The Title
      </div>
      <div className='author'>
        The Author
      </div>
      <ul className='stats'>
        <li className='rating'>
          5 stars
        </li>
        <li className='isbn'>
          12-345678-910
        </li>
      </ul>
    </div>
  );
}

function HelloWorld() {
  return React.createElement('div', {}, 'Hello World');
}

ReactDOM.render(
  [<MyThing key={1} />,
  <HelloWorld key={1+200000} />],
  document.getElementById('root')
);
