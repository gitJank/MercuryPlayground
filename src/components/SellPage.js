import React, { Component } from 'react';
import SellInput from "./SellInput";
import "./ComponentStyles/displayListPage.scss";
import "./ComponentStyles/sellPage.scss";



class SellPage extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div className="bodydiv">
        <div className="titlediv">
          <div className="title">Sell</div>
        </div>
        <SellInput/>
      </div>
    );
  }
}

export default SellPage;