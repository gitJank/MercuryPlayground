import React, { Component } from 'react';
import colors from '../styles/colors';

const styles = {
    container: {
        width: '40%',
        minWidth: '400px',
        height: '100px',
        margin: 'auto',
        backgroundColor: colors.darkGrey,
        marginTop: '1%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    date: {
        fontSize: '24px',
        margin: '20px'

    },
    button: {
        height: '36px',
        width: '36px',
        fontSize: '30px',
        backgroundColor: 'transparent',
        color: colors.darkYellow,
        border: 'none',
        '&:hover': {
            cursor: 'pointer'
        }
    }
};

function getInitialFirst() {
    var curr = new Date; 
    var first = curr.getDate() - curr.getDay(); 

    return new Date(curr.setDate(first));
}

function getInitialLast() {
    var curr = new Date; 
    var first = curr.getDate() - curr.getDay();
    var last = first + 6; 

    return new Date(curr.setDate(last));
}



class WeekPicker extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstday: getInitialFirst(),
            lastday: getInitialLast()
        };

        this.incrementWeek = this.incrementWeek.bind(this);
        this.decrementWeek = this.decrementWeek.bind(this);
        this.formatDate = this.formatDate.bind(this);
    }

    formatDate(firstday, lastday){
        var options = { day: 'numeric', month: 'long'};

        var formatedFirst = firstday.toLocaleDateString("en-US", options);
        var formatedLast = lastday.toLocaleDateString("en-US", options);

        return formatedFirst + " - " + formatedLast;
    }

    incrementWeek(prev) {
        var first = prev.getDate() + 1;
        var last = first + 6;
        var firstDate = new Date(prev.setDate(first))
        var lastDate = new Date(prev.setDate(last))
        this.setState({
            firstday: firstDate,
            lastday: lastDate
        }); 
    }
    decrementWeek(prev) {
        var last = prev.getDate() - 1;
        var first = last - 6;
        var firstDate = new Date(prev.setDate(first))
        var lastDate = new Date(prev.setDate(last))
        this.setState({
            firstday: firstDate,
            lastday: lastDate
        }); 
    }

    render() {
        return (
            <div>
                <div style={styles.container}>
                    <button style={styles.button} onClick={() => {this.decrementWeek(this.state.firstday)}}>{'<'}</button>
                    <div style={styles.date}>{this.formatDate(this.state.firstday, this.state.lastday)}</div>
                    <button style={styles.button} onClick={() => {this.incrementWeek(this.state.lastday)}}>{'>'}</button>
                </div>
            </div>
        );
    }
}

export default WeekPicker;