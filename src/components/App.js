import { NavLink, Route, Switch} from "react-router-dom";

import HomePage from "./HomePage";
import BuyPage from "./BuyPage";
import RentPage from "./RentPage";
import SellPage from "./SellPage";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import "./ComponentStyles/app.scss";

class App extends React.Component {
    render() {
        const activeStyle = { color: 'deepskyblue' };
        return (
            <div>
            <div className='navbar'>
              <div align='left' className='brand'>
                    Sandbar
                    <div className="subBrand">The #1 site for beach front property</div>
              </div>

              <NavLink  className='navLink' exact to="/" activeStyle={activeStyle}>Home</NavLink>
              
              <NavLink className='navLink' to="/buy" activeStyle={activeStyle}>Buy</NavLink>
              
              <NavLink className='navLink' to="/rent" activeStyle={activeStyle}>Rent</NavLink>
              
              <NavLink className='navLink' to="/sell" activeStyle={activeStyle}>Sell</NavLink>
            </div>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/buy" component={BuyPage} />
              <Route path="/rent" component={RentPage} />
              <Route path="/sell" component={SellPage} />
              <Route component={NotFoundPage} />
            </Switch>
            <div className='footer'>Product of Jank LLC</div>
          </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.element
};

export default hot(module)(App);