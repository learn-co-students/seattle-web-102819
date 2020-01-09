import React from "react";

const Friend = props => {
  const { friend, number } = props;
  return (
    <div>
      <h2>name: {friend.name}</h2>
      <h2>age: {friend.age}</h2>
      <h2>food: {friend.favFood}</h2>
      <h3>number: {number}</h3>
      <hr/>
    </div>
  );
};

export default Friend;
