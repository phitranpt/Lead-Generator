import React, { Component } from 'react';
import { connect } from 'react-redux';

import propTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardMedia, Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    textAlign: 'center'
  },
  card: {
    maxWidth: 200,
    height: 180,
    textAlign: 'center',
  },
  auto: {
    height: '100%',
  },
  media: {
    position: 'relative',
    textAlign: 'center',
  },
  title: {
    position: 'absolute',
    top: '20%',
    left: '20%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
  }
});

class Auto extends Component {
  render() {
    const { classes } = this.props;
      return (
        <div className={classes.root}>
          <div className={classes.media}>
            <img src="/images/main.png" alt="main" width="100%" height="auto"/>
            <h1 className={classes.title}>Insurance</h1>
          </div>

            <Card className={classes.card}>
              <CardMedia
                className={classes.auto}
                image="/images/auto.jpg"
                title="auto"
              >
              <Typography>Get Your Personalized Auto Insurance Quote</Typography>
              </CardMedia>
            </Card>
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
