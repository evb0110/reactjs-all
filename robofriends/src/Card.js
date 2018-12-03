import React from 'react';

const card = ({ id, name, username, email }) => {
  return (
    <div className='tc bg-light-green dib w5 br3 pa3 ma2 grow bw2 shadow-5'>
      <h1 className='f5'>{name}</h1>
      <img src={`https://robohash.org/${id*2}.png?size=200x200`}  width="150" alt="robot's pic" />
      <p className='f6'>{username}</p>
      <p className='f6'>{email}</p>
    </div>
  );
};

export default card;