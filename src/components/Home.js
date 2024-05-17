// src/components/Home.js
import {BroweserRouter, Router, Route} from 'react-router-dom'
import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>Explore my projects and get to know more about me.</p>
    </div>
  );
}

export default Home;
