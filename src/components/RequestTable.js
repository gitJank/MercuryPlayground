import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import colors from '../styles/colors'

const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: colors.lightBlack,
      border: 'none',
      color: colors.darkWhite,
    },
    body: {
      color: colors.white,
      border: 'none',
      fontSize: 14,
    },
    eh: {
        color: theme
    }
  }))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: colors.grey,
    },
    '&:nth-of-type(even)': {
        backgroundColor: colors.darkGrey,
      },
    '&:hover': {
        backgroundColor: colors.black,
        cursor: 'pointer'
    }
  }
});

let id = 0;
function createData(name, requestedDate, requestedTime, type, location, status) {
  id += 1;
  return { id, name, requestedDate, requestedTime, type, location, status };
}

const rows = [
  createData('Doe, John', '09/17', '11:00 AM', 'Retiree', 'Jefferson Barracks', "COMPLETE"),
  createData('Doe, John', '09/17', '4:00 PM', 'Veteran', "Dave's Backyard", "COMPLETE"),
  createData('Doe, John', '09/18', '12:30 PM', 'Retiree', 'Jefferson Barracks', "CONFIRMED"),
  createData('Doe, John', '09/20', '10:00 AM', 'Retiree', "O'Fallon Cemetery", "REQUESTED"),
  createData('Doe, John', '09/21', '2:15 PM', 'Active Duty', 'Jefferson Barracks', "CONFIRMED"),
];

function RequestTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>NAME</CustomTableCell>
            <CustomTableCell>REQUESTED DATE</CustomTableCell>
            <CustomTableCell>REQUESTED TIME</CustomTableCell>
            <CustomTableCell>TYPE OF HONORS</CustomTableCell>
            <CustomTableCell>LOCATION</CustomTableCell>
            <CustomTableCell>STATUS</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell component="th" scope="row">
                  {row.name}
                </CustomTableCell>
                <CustomTableCell>{row.requestedDate}</CustomTableCell>
                <CustomTableCell>{row.requestedTime}</CustomTableCell>
                <CustomTableCell>{row.type}</CustomTableCell>
                <CustomTableCell>{row.location}</CustomTableCell>
                <CustomTableCell>{row.status}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

RequestTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RequestTable);