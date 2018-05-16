import React from 'react';
import './ComponentStyles/homePage.scss';

const HomePage = () => {
  return (
    <div>
      <div className="container">
        <div className="centered">
          <div>
            <button className="homeButton" autoFocus>Buy</button>
            <button className="homeButton">Rent</button>
            <button className="homeButton">Sell</button>
          </div>
          <div>
            <input className="homeTextBox" type="text" placeholder="Search"/>
            <button className="searchButton">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;