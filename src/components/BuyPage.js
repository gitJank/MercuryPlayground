import React, { Component } from 'react';
import HomeList from "./HomeList";
import "./ComponentStyles/displayListPage.scss";



class BuyPage extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div className="bodydiv">
        <div className="titlediv">
          <div className="title">Buy</div>
        </div>
        <HomeList type="BUY" />
      </div>
    );
  }
}

export default BuyPage;