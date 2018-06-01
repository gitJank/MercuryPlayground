import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = ({
    formControl: {
        minWidth: 120,
    },
});

class TypeSelect extends React.Component {
    state = {
        selectedtype: ''
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="typeselect">Type:</InputLabel>
                <Select
                    value={this.state.selectedtype}
                    onChange={this.handleChange}
                    inputProps={{
                        name: 'selectedtype',
                        id: 'selecttype',
                    }}>
                    <MenuItem value={1}>Buy</MenuItem>
                    <MenuItem value={2}>Rent</MenuItem>
                </Select>
            </FormControl>
        );
    }
}

TypeSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TypeSelect);