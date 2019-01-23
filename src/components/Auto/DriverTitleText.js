import React, { Component } from 'react';
import { connect } from 'react-redux';

import propTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = ({
  text: {
    marginBottom: 10,
    fontWeight: 900,
  },
  textTwo: {
    textAlign: 'justify',
  },
});

class DriverTitleText extends Component {

  render() {
    const { classes } = this.props;
      return (
        <div>
            <Typography className={classes.text} variant="h5" component="h3">
              Tell us about yourself.
            </Typography>
            <Typography className={classes.textTwo} component="p">
              Please fill out your personal information below so our agents can get to know you better.  We're only using this information to get the best possible quote for you.  We will never send you unwanted emails or calls.
            </Typography>
        </div>
      );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

DriverTitleText.propTypes = {
  classes: propTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(DriverTitleText));

