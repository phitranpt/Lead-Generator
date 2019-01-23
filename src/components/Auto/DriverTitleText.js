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
              Tell us about your yourself.
            </Typography>
            <Typography className={classes.textTwo} component="p">
              Please fill out your personal information below for our agents to get to know you better.
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

