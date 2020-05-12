import React from 'react';
import Friend from './Friend/Friend';

const Friends = (props) => {
  let friends = props.friends.map( fr => <Friend name={fr.name} id={fr.id} /> );
  return (
    <div>
      <h1>Friends</h1>
      { friends }
    </div>
  );
}

export default Friends;
