import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import StateSelect from './StateSelect';
import TypeSelect from './TypeSelect';
import "./ComponentStyles/sellInput.scss";



class SellInput extends Component {
    constructor() {
        super();
    }

    state = {
        address: '',
        state: '',
        zipcode: '',
        type: '',
        multiline: 'Controlled'
    };

    handleChange = address => event => {
        this.setState({
            [address]: event.target.value,
        });
    };

    handleChange = zipcode => event => {
        this.setState({
            [zipcode]: event.target.value,
        });
    };


    render() {
        return (
            <div>
                <form className="inputForm" noValidate autoComplete="off">
                    <div className="control">
                        <TextField
                            id="address"
                            label="Address:"
                            value={this.state.address}
                            onChange={this.handleChange('address')}
                            margin="normal"
                        />
                    </div>
                    <div className="control">
                        <StateSelect />
                    </div>
                    <div className="control">
                        <TextField
                            id="zipcode"
                            label="Zip Code:"
                            value={this.state.zipcode}
                            onChange={this.handleChange('zipcode')}
                            margin="normal"
                        />
                    </div>
                    <div className="control">
                        <TypeSelect />
                    </div>
                </form>
            </div>
        );
    }
}

export default SellInput;