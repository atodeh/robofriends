import React from 'react';
import Card from './Card';


const CardList = ({ robots }) => {
  return (
    <div>
      {/*This mapped array contains all of our robot cards*/}
      {
        robots.map(item => <Card key={item.id} id={item.id} name={item.name} email={item.email} />)
      }
    </div>
  );
}

export default CardList;
