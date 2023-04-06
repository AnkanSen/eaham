import React, { useState } from 'react';
import './eCard2.css';
import { Link } from 'react-router-dom';
const Card = () => {
  return (
    <div class="cardBox">
  <div class="cards">
    <h2>Event</h2>
    <span>Date</span>
    <div class="content">
      <p>This is Ankan, your tech mate!!! I love you all. Lets make this world a better place for all of us. Keep prospering...Keep learning!!!</p>
        <Link to="/events">Register Now</Link>
    </div>
  </div>
</div>
  );
};

export default Card;