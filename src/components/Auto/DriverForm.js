import React, { Component } from 'react';
import { connect } from 'react-redux';

import propTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ReactDOM from 'react-dom';

import {
    Button,
    OutlinedInput,
    InputLabel,
    FormControl,
    Select,
    TextField, 
    StepLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
} from '@material-ui/core';

const styles = theme => ({
    formControl: {
        width: '48%',
    },
    formControlTwo: {
        width: '48%',
        float: 'right',
    },
    email: {
        width: '100%',
    },
    radio: {
        display: 'inline'
    },
    stepLabel: {
        marginTop: 25,
        color: 'black',
    },
    street: {
        width: '70%'
    },
    state: {
        width: '30%',
        marginLeft: 20,
    },
    unit: {
        width: '25%',
        float: 'right',
    },
    zip: {
        width: '25%',
        float: 'right',
    },
    nextBtn: {
        marginTop: 25,
        width: '100%',
        height: 50,
        background: '#6200ee',
            '&:hover': {
                background: '#3700b3',
            },
        color: 'white'
    },
    addVehicleBtn: {
        marginTop: 30,
        width: '100%',
        height: 50,
    },
});

class DriverForm extends Component {

    state = {
        firstName: '',
        lastName: '',
      };

      addVehicle = () => {
          console.log('add vehicle btn works!');
      };

      componentDidMount() {
        this.setState({
          labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        });
      };
    
      handleChange = name => event => {
        this.setState({ [name]: event.target.value });
      };

      nextBtn = () => {
        console.log('next btn works!');
      };

  render() {
    const { classes } = this.props;
      return (
        <div>

            <StepLabel className={classes.stepLabel}>Name</StepLabel>
            <TextField
                required
                id="outlined-required"
                label="First Name"
                className={classes.formControl}
                margin="normal"
                variant="outlined"
                value={this.state.firstName}
                onChange={this.handleChange('firstName')}
            />

            <TextField
                required
                id="outlined-required"
                label="Last Name"
                className={classes.formControlTwo}
                margin="normal"
                variant="outlined"
                value={this.state.lastName}
                onChange={this.handleChange('lastName')}
            />
            
            <StepLabel className={classes.stepLabel}>Email</StepLabel>
            <TextField
                required
                id="outlined-required"
                label="Email Address"
                className={classes.email}
                margin="normal"
                variant="outlined"
                value={this.state.email}
                onChange={this.handleChange('email')}
            />

            <StepLabel className={classes.stepLabel}>Address</StepLabel>
            <TextField
                required
                id="outlined-required"
                label="Street"
                className={classes.street}
                margin="normal"
                variant="outlined"
                value={this.state.street}
                onChange={this.handleChange('street')}
            />

            <TextField
                required
                id="outlined-required"
                label="Unit"
                className={classes.unit}
                margin="normal"
                variant="outlined"
                value={this.state.unit}
                onChange={this.handleChange('unit')}
            />

            <TextField
                required
                id="outlined-required"
                label="City"
                className={classes.city}
                margin="normal"
                variant="outlined"
                value={this.state.city}
                onChange={this.handleChange('city')}
            />

            <FormControl 
                required
                variant="outlined" 
                margin="normal" 
                className={classes.state}
            >
                <InputLabel
                    ref={ref => {
                        this.InputLabelRef = ref;
                        }}
                        htmlFor="outlined-state-native-simple"
                >
                    State
                </InputLabel>
                <Select
                        native
                        value={this.state.state}
                        onChange={this.handleChange('state')}
                        input={
                        <OutlinedInput
                            name="miles"
                            labelWidth={this.state.labelWidth}
                            id="outlined-state-native-simple"
                        />
                        }
                    >
                    <option value="" />
                    <option value={'Alabama'}>Alabama</option>
                    <option value={'Alaska'}>Alaska</option>
                    <option value={'Arizona'}>Arizona</option>
                    <option value={'California'}>California</option>
                    <option value={'Colorado'}>Colorado</option>
                    <option value={'Connecticut'}>Connecticut</option>
                    <option value={'Delaware'}>Delaware</option>
                    <option value={'Florida'}>Florida</option>
                    <option value={'Georgia'}>Georgia</option>
                    <option value={'Hawaii'}>Hawaii</option>
                    <option value={'Idaho'}>Idaho</option>
                    <option value={'Illinois'}>Illinois</option>
                    <option value={'Indiana'}>Indiana</option>
                    <option value={'Iowa'}>Iowa</option>
                    <option value={'Kansas'}>Kansas</option>
                    <option value={'Kentucky'}>Kentucky</option>
                    <option value={'Louisiana'}>Louisiana</option>
                    <option value={'Maine'}>Maine</option>
                    <option value={'Maryland'}>Maryland</option>
                    <option value={'Massachusetts'}>Massachusetts</option>
                    <option value={'Michigan'}>Michigan</option>
                    <option value={'Minnesota'}>Minnesota</option>
                    <option value={'Mississippi'}>Mississippi</option>
                    <option value={'Missouri'}>Missouri</option>
                    <option value={'Montana'}>Montana</option>
                    <option value={'Nebraska'}>Nebraska</option>
                    <option value={'Nevada'}>Nevada</option>
                    <option value={'New Hampshire'}>New Hampshire</option>
                    <option value={'New Jersey'}>New Jersey</option>
                    <option value={'New Mexico'}>New Mexico</option>
                    <option value={'New York'}>New York</option>
                    <option value={'North Carolina'}>North Carolina</option>
                    <option value={'North Dakota'}>North Dakota</option>
                    <option value={'Ohio'}>Ohio</option>
                    <option value={'Oklahoma'}>Oklahoma</option>
                    <option value={'Oregon'}>Oregon</option>
                    <option value={'Pennsylvania'}>Pennsylvania</option>
                    <option value={'Rhode Island'}>Rhode Island</option>
                    <option value={'South Carolina'}>South Carolina</option>
                    <option value={'South Dakota'}>South Dakota</option>
                    <option value={'Tennessee'}>Tennessee</option>
                    <option value={'Texas'}>Texas</option>
                    <option value={'Utah'}>Utah</option>
                    <option value={'Vermont'}>Vermont</option>
                    <option value={'Virginia'}>Virginia</option>
                    <option value={'Washington'}>Washington</option>
                    <option value={'West Virginia'}>West Virginia</option>
                    <option value={'Wisconsin'}>Wisconsin</option>
                    <option value={'Wyoming'}>Wyoming</option>
                </Select>
            </FormControl>

            <TextField
                required
                id="outlined-required"
                label="Zip Code"
                className={classes.zip}
                margin="normal"
                variant="outlined"
                value={this.state.zip}
                onChange={this.handleChange('zip')}
            />



            
                
            <StepLabel className={classes.stepLabel}>Do you own, lease, or finance this vehicle?</StepLabel>
            <RadioGroup
                required
                name="finance"
                className={classes.radio}
                value={this.state.finance}
                onChange={this.handleChange('finance')}
            >
                <FormControlLabel value="Own" control={<Radio />} label="Own" />
                <FormControlLabel value="Lease" control={<Radio />} label="Lease" />
                <FormControlLabel value="Finance" control={<Radio />} label="Finance" />
            </RadioGroup>

            <StepLabel className={classes.stepLabel}>What is the main purpose of this vehicle?</StepLabel>
            <RadioGroup
                required
                name="usage"
                className={classes.radio}
                value={this.state.usage}
                onChange={this.handleChange('usage')}
            >
                <FormControlLabel value="Commute" control={<Radio />} label="Commute" />
                <FormControlLabel value="Pleasure" control={<Radio />} label="Pleasure" />
                <FormControlLabel value="Business" control={<Radio />} label="Business" />
            </RadioGroup>

            <StepLabel className={classes.stepLabel}>How many miles do you drive this vehicle annually?</StepLabel>
            <FormControl 
                required
                variant="outlined" 
                margin="normal" 
                className={classes.miles}
            >
                <InputLabel
                    ref={ref => {
                        this.InputLabelRef = ref;
                        }}
                        htmlFor="outlined-miles-native-simple"
                >
                    Please select number of miles
                </InputLabel>
                <Select
                    native
                    value={this.state.miles}
                    onChange={this.handleChange('miles')}
                    input={
                    <OutlinedInput
                        name="miles"
                        labelWidth={this.state.labelWidth}
                        id="outlined-miles-native-simple"
                    />
                    }
                >
                    <option value="" />
                    <option value={0-4999}>0-4999 miles</option>
                    <option value={5000-9999}>5000-9999 miles</option>
                    <option value={10000-14999}>10,000-14,999 miles</option>
                    <option value={15000-19999}>15,000-19,999 miles</option>
                    <option value={20000-24999}>20,000-24,999 miles</option>
                    <option value={25000-29999}>25,000-29,999 miles</option>
                    <option value={30000}>30,000+ miles</option>
                </Select>
            </FormControl>

            <StepLabel className={classes.stepLabel}>Does this vehicle have an anti-theft locking device?</StepLabel>
            <RadioGroup
                required
                name="theft"
                className={classes.radio}
                value={this.state.theft}
                onChange={this.handleChange('theft')}
            >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>

            <StepLabel className={classes.stepLabel}>Do you keep this vehicle at your home address?</StepLabel>
            <RadioGroup
                required
                name="theft"
                className={classes.radio}
                value={this.state.theft}
                onChange={this.handleChange('theft')}
            >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
            
            <StepLabel></StepLabel>

            <Button 
                className={classes.addVehicleBtn} 
                variant="outlined" 
                color="primary"
                onClick={this.addVehicle}
            >
                + Add another vehicle
            </Button>

            <Button 
                className={classes.nextBtn} 
                variant="outlined" 
                color="primary"
                onClick={this.nextBtn}
            >
                Next
            </Button>

        </div>
      );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

DriverForm.propTypes = {
  classes: propTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(DriverForm));

