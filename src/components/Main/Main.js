import React, { Component } from 'react';
import { connect } from 'react-redux';

import propTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardMedia, Typography } from '@material-ui/core';
import MediaQuery from 'react-responsive';

const styles = theme => ({
  root: {
    textAlign: 'center'
  },
  card: {
    height: 120,
    maxWidth: 200,
    margin: '1%',
    display: 'inline-block',
    width: '100%',
    textAlign: 'center',
  },
  cardMedia: {
    height: 50,
    width: 50,
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'relative'
  },
  cardTitle: {
    color: 'grey',
    paddingTop: '5%'
  },
  mainTitle: {
    fontSize: 50,
    fontWeight: '700',
    position: 'absolute',
    top: '25%',
    left: '20%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
  },
  mobileMainTitle: {
    fontSize: 25,
    position: 'absolute',
    top: '15%',
    left: '20%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
  },
  secondaryTitle: {
    fontSize: 35,
    marginTop: '1vh',
    marginBottom: '1vh',
  },
});

class Main extends Component {
  render() {
    const { classes } = this.props;
      return (
        <div className={classes.root}>

          <MediaQuery minWidth={760}>
            <div className={classes.media}>
              <img src="/images/main.png" alt="main" width="100%" height="auto"/>
              <Typography className={classes.mainTitle}>Insurance</Typography>
            </div>
          </MediaQuery>

          <MediaQuery maxWidth={761}>
            <div className={classes.media}>
              <img src="/images/main.png" alt="main" width="100%" height="auto"/>
              <Typography className={classes.mobileMainTitle}>Insurance</Typography>
            </div>
          </MediaQuery>

          <div>
            <Typography className={classes.secondaryTitle}>Let Us Compare Your Quote</Typography>
          </div>

          <div>
            <Card className={classes.card}>
              <Typography className={classes.cardTitle}>Auto</Typography>
              <CardMedia
                className={classes.cardMedia}
                image="/images/auto.png"
                title="auto"
              >
              </CardMedia>
            </Card>

            <Card className={classes.card}>
              <Typography className={classes.cardTitle}>Home</Typography>
              <CardMedia
                className={classes.cardMedia}
                image="/images/home.png"
                title="auto"
              >
              </CardMedia>
            </Card>

            <Card className={classes.card}>
              <Typography className={classes.cardTitle}>Life</Typography>
              <CardMedia
                className={classes.cardMedia}
                image="/images/life.png"
                title="auto"
              >
              </CardMedia>
            </Card>

            <Card className={classes.card}>
              <Typography className={classes.cardTitle}>Business</Typography>
              <CardMedia
                className={classes.cardMedia}
                image="/images/business.png"
                title="auto"
              >
              </CardMedia>
            </Card>
          </div>
        </div>
      );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

Main.propTypes = {
  classes: propTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(Main));
