import React from 'react';
import Card from './Card';


const cardList = ({ robots }) => {
  const cardArray = robots.map((robot) => (
    <Card
      key={robot.id}
      id={robot.id}
      name={robot.name}
      email={robot.email}
      username={robot.username}
    />
  ));
  return (
    <div>
      {cardArray}
    </div>
    
  );
};

export default cardList;