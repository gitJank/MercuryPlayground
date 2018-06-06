import React, { Component } from 'react';
import "./ComponentStyles/viewHome.scss";



class ViewHome extends Component {
  constructor(props) {
    super(props);
    this.home = this.props.props;
  }

  render() {
    return (
      <div>
        {this.home._id}
      </div>
    );
  }
}

export default ViewHome;