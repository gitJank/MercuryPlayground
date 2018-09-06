import { NavLink, Route, Switch} from "react-router-dom";

import SchedulePage from "./SchedulePage";
import RequestsPage from "./RequestsPage";
import MessagesPage from "./MessagesPage";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import colors from "../styles/colors"
import "./ComponentStyles/app.scss";


class App extends React.Component {
    render() {
        const activeStyle = { 
            color: 'white',
            borderBottom: '4px solid ',
            borderBottomColor: colors.darkYellow,  
        };
        return (
            <div>
            <div className='navbar'>
              
              <span className="brand">Mercury</span>

              <NavLink  className='navLink' exact to="/schedule" activeStyle={activeStyle}>Schedule</NavLink>
              
              <NavLink className='navLink' to="/requests" activeStyle={activeStyle}>Requests</NavLink>
              
              <NavLink className='navLink' to="/messages" activeStyle={activeStyle}>Messages</NavLink>
            </div>
            <div className="switch">
            <Switch>
              <Route exact path="/schedule" component={SchedulePage} />
              <Route path="/requests" component={RequestsPage} />
              <Route path="/messages" component={MessagesPage} />
              <Route component={NotFoundPage} />
            </Switch>
            </div>
          </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.element
};

export default hot(module)(App);