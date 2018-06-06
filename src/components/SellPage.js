import React, { Component } from 'react';
import SellInput from "./SellInput";
import MediaInput from "./MediaInput"
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
        <div className="sellcontainer">
        <SellInput/>
        <MediaInput/>
        </div>
        <div className="sellfooter">
          <button className="footerButton">Cancel</button>
          <button className="footerButton">Save</button>         
        </div>
      </div>
    );
  }
}

export default SellPage;