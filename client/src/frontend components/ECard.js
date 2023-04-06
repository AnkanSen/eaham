import React, { useState } from 'react';
import './eCard.css';

const Card = (props) => {
  return (
    <div class="cardBoxs">
  <div class="cards">
    <h2>{props.teamMemberData.name}</h2>
    <span>{props.teamMemberData.position}</span>
    <div class="contents">
      <p>This is Ankan, your tech mate!!! I love you all. Lets make this world a better place for all of us. Keep prospering...Keep learning!!!</p>
    </div>
  </div>
</div>
  );
};

export default Card;