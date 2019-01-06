import React, { Component } from 'react';
import { connect } from 'react-redux';

import propTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import AutoForm from './AutoForm';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 10,
    paddingBottom: theme.spacing.unit * 10,
    width: 700,
    marginTop: '5vh',
    margin: 'auto',
  }
});

class Auto extends Component {

  render() {
    const { classes } = this.props;
      return (
        <div className={classes.root}>
          <Paper className={classes.paper} elevation={1}>
            <Typography variant="h5" component="h3">
              Please tell us a little more about your vehicle.
            </Typography>
            <br></br>
            <Typography component="p">
              Let us know your info. The more accurate it is, the more accurate your quote will be. We'll send your information over to the most appropriate agent.
            </Typography>
            <br></br>
            <Typography component="p">
              What vehicle would you like to insure?
            </Typography>
            <br></br>
            <AutoForm/>
          </Paper>
        </div>
      );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

Auto.propTypes = {
  classes: propTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(Auto));

