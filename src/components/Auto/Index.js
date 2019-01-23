import React, { Component } from 'react';
import { connect } from 'react-redux';

import propTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import { 
  Paper,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import AutoForm from './AutoForm';
import AutoTitleText from './AutoTitleText';
import DriverTitleText from './DriverTitleText';
import Driver from './DriverTitleText';
import Person from '@material-ui/icons/Person';
import DirectionsCar from '@material-ui/icons/DirectionsCar';

const styles = ({
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

function TabContainer(props) {
  return (
    <Typography component="div">
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: propTypes.node.isRequired,
};

class Index extends Component {

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
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

          {value === 0 && <TabContainer>
            <Paper className={classes.paper} elevation={1}>
            <AutoTitleText />
            <br></br>
            <AutoForm />
            </Paper>
          </TabContainer>}
          
          {value === 1 && <TabContainer>
            <Paper className={classes.paper} elevation={1}>
            <DriverTitleText />
            <br></br>
            {/* <DriverForm /> */}
            </Paper>
          </TabContainer>}

          
        </div>
      );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

Index.propTypes = {
  classes: propTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(Index));

