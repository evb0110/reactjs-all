import React from 'react';

const card = ({ name, username, id, email }) => {
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <h1 className='f4'>{name}</h1>
      <img src={`https://robohash.org/${id*2}.png?set=set4`}  width="150" alt="robot's pic" />
      <p>username: {username}</p>
      <p>email: {email}</p>
    </div>
  );
};

export default card;