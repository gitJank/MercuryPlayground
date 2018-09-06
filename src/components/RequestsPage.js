import React, { Component } from 'react';
import RequestTable from './RequestTable';
import WeekPicker from './WeekPicker';

class RequestsPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <WeekPicker />
        <RequestTable />
      </div>
    );
  }
}

export default RequestsPage;