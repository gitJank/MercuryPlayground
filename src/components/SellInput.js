import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import StateSelect from './StateSelect';
import "./ComponentStyles/sellInput.scss";



class SellInput extends Component {
    constructor() {
        super();
    }

    state = {
        address: '',
        state: '',
        zipcode: '',
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
                            label="Address"
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
                            label="Zip Code"
                            value={this.state.zipcode}
                            onChange={this.handleChange('zipcode')}
                            margin="normal"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SellInput;