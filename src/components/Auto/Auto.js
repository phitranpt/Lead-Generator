import React, { Component } from 'react';
import { connect } from 'react-redux';

import propTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import { 
  Paper, 
  Typography,
  Tab,
  Tabs,
} from '@material-ui/core';
import AutoForm from './AutoForm';
import Person from '@material-ui/icons/Person';
import DirectionsCar from '@material-ui/icons/DirectionsCar';

const styles = theme => ({
  paper: {
    paddingRight: 80,
    paddingLeft: 80,
    paddingBottom: 40,
    paddingTop: 40,
    width: 700,
    margin: 'auto',
    marginBottom: '5vh',
    borderRadius: '0px 0px 4px 4px',
    boxShadow: 'none',
  },
  tabs: {
    width: 700,
    margin: 'auto',
    borderRadius: '4px 4px 0px 0px',
    borderBottom: '1px solid grey',
    boxShadow: 'none',
  },
});

class Auto extends Component {

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
      return (
        <div>
          <Paper className={classes.tabs}>
            <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                variant="fullWidth"
                indicatorColor="primary"
                textColor="primary"
              >
              <Tab icon={<DirectionsCar />} label="VEHICLE" />
              <Tab icon={<Person />} label="DRIVER" />
            </Tabs>
          </Paper>

          <Paper className={classes.paper} elevation={1}>
            <Typography className={classes.text} variant="h5" component="h3">
              Please tell us a little more about your vehicle.
            </Typography>
            <Typography component="p">
              Let us know your info. The more accurate it is, the more accurate your quote will be. We'll send your information over to the most appropriate agent.
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

