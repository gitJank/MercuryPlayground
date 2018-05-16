import React, { Component } from 'react';
import HomeList from "./HomeList";
import "./ComponentStyles/displayListPage.scss";



class RentPage extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div className="bodydiv">
        <div className="titlediv">
          <div className="title">Rent</div>
        </div>
        <HomeList type="RENT" />
      </div>
    );
  }
}

export default RentPage;