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

class AutoTitleText extends Component {

  render() {
    const { classes } = this.props;
      return (
        <div>
            <Typography className={classes.text} variant="h5" component="h3">
              Tell us a little more about your vehicle.
            </Typography>
            <Typography className={classes.textTwo} component="p">
              Let us know your info. The more accurate it is, the more accurate your quote will be. We'll send your information over to the most appropriate agent.
            </Typography>
        </div>
      );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

AutoTitleText.propTypes = {
  classes: propTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(AutoTitleText));

