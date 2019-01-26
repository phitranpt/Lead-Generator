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

const styles = ({
    formControl: {
        width: '48%',
    },
    formControlTwo: {
        width: '48%',
        float: 'right',
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
    dropDownForm: {
        width: '100%',
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
    addDriverBtn: {
        marginTop: 30,
        width: '100%',
        height: 50,
    },
});

class DriverForm extends Component {

    state = {
        labelWidth: 0,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        street: '',
        unit: '',
        city: '',
        state: '',
        zip: '',
        gender: '',
        dob: '',
        license: '',
        maritalStatus: '',
        creditScore: '',
        currentAutoInsurance: '',
        tickets: '',
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

      //SEND AUTO FORM POST REQUEST TO DATABASE
      submitAppBtn = () => {
        console.log('submit btn works!', this.state);
        this.props.dispatch( { type: 'SEND_AUTO_FORM', payload: this.state })
      };

  render() {
    const { classes } = this.props;
      return (
        <div>

            <StepLabel className={classes.stepLabel}>Name</StepLabel>
            <TextField
                label="First Name"
                className={classes.formControl}
                margin="normal"
                variant="outlined"
                value={this.state.firstName}
                onChange={this.handleChange('firstName')}
            />

            <TextField
                label="Last Name"
                className={classes.formControlTwo}
                margin="normal"
                variant="outlined"
                value={this.state.lastName}
                onChange={this.handleChange('lastName')}
            />
            
            <StepLabel className={classes.stepLabel}>Contact Information</StepLabel>
            <TextField
                label="Email Address"
                className={classes.formControl}
                margin="normal"
                variant="outlined"
                value={this.state.email}
                onChange={this.handleChange('email')}
            />

            <TextField
                label="Phone"
                className={classes.formControlTwo}
                margin="normal"
                variant="outlined"
                value={this.state.phone}
                onChange={this.handleChange('phone')}
            />

            <StepLabel className={classes.stepLabel}>Address</StepLabel>
            <TextField
                label="Street"
                className={classes.street}
                margin="normal"
                variant="outlined"
                value={this.state.street}
                onChange={this.handleChange('street')}
            />

            <TextField
                label="Unit"
                className={classes.unit}
                margin="normal"
                variant="outlined"
                value={this.state.unit}
                onChange={this.handleChange('unit')}
            />

            <TextField
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
                label="Zip Code"
                className={classes.zip}
                margin="normal"
                variant="outlined"
                value={this.state.zip}
                onChange={this.handleChange('zip')}
            />
  
            <StepLabel className={classes.stepLabel}>Gender</StepLabel>
            <RadioGroup
                name="gender"
                className={classes.radio}
                value={this.state.gender}
                onChange={this.handleChange('gender')}
            >
                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                <FormControlLabel value="Female" control={<Radio />} label="Female" />
            </RadioGroup>

            <StepLabel className={classes.stepLabel}>Date of Birth</StepLabel>
            <TextField
                id="date"
                type="date"
                margin="normal"
                variant="outlined"
                className={classes.textField}
                value={this.state.dob}
                onChange={this.handleChange('dob')}
                InputLabelProps={{
                shrink: true,
                }}
            />

            <StepLabel className={classes.stepLabel}>Do you have a valid US driver's license?</StepLabel>
            <RadioGroup
                required
                name="license"
                className={classes.radio}
                value={this.state.license}
                onChange={this.handleChange('license')}
            >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>

            <StepLabel className={classes.stepLabel}>Marital Status</StepLabel>
            <FormControl
                required
                variant="outlined" 
                margin="normal" 
                className={classes.dropDownForm}
            >
                <InputLabel
                    ref={ref => {
                        this.InputLabelRef = ref;
                        }}
                        htmlFor="outlined-maritalStatus-native-simple"
                >
                    Select
                </InputLabel>
                <Select
                    native
                    value={this.state.maritalStatus}
                    onChange={this.handleChange('maritalStatus')}
                    input={
                    <OutlinedInput
                        name="maritalStatus"
                        labelWidth={this.state.labelWidth}
                        id="outlined-maritalStatus-native-simple"
                    />
                    }
                >
                    <option value="" />
                    <option value={'Single'}>Single</option>
                    <option value={'Married'}>Married</option>
                    <option value={'Divorced'}>Divorced</option>
                    <option value={'Widowed'}>Widowed</option>
                </Select>
            </FormControl>

            <StepLabel className={classes.stepLabel}>Credit Score</StepLabel>
            <FormControl
                required
                variant="outlined" 
                margin="normal" 
                className={classes.dropDownForm}
            >
                <InputLabel
                    ref={ref => {
                        this.InputLabelRef = ref;
                        }}
                        htmlFor="outlined-creditScore-native-simple"
                >
                    Select
                </InputLabel>
                <Select
                    native
                    value={this.state.creditScore}
                    onChange={this.handleChange('creditScore')}
                    input={
                    <OutlinedInput
                        name="maritalStatus"
                        labelWidth={this.state.labelWidth}
                        id="outlined-creditScore-native-simple"
                    />
                    }
                >
                    <option value="" />
                    <option value={'Excellent (720-850)'}>Excellent (720-850)</option>
                    <option value={'Good (690-719)'}>Good (690-719)</option>
                    <option value={'Average (630-689)'}>Average (630-689)</option>
                    <option value={'Poor (350-629)'}>Poor (350-629)</option>
                </Select>
            </FormControl>

            <StepLabel className={classes.stepLabel}>Auto Insurance</StepLabel>
            <TextField
                label="Current Insurance"
                className={classes.formControl}
                margin="normal"
                variant="outlined"
                value={this.state.currentAutoInsurance}
                onChange={this.handleChange('currentAutoInsurance')}
            />

            <FormControl 
                variant="outlined" 
                margin="normal" 
                className={classes.formControlTwo}
            >
                <InputLabel
                    ref={ref => {
                        this.InputLabelRef = ref;
                        }}
                        htmlFor="outlined-currentAutoInsurance-native-simple"
                >
                    Insured in the last 30 days?
                </InputLabel>
                <Select
                    native
                    value={this.state.currentAutoInsurance}
                    onChange={this.handleChange('currentAutoInsurance')}
                    input={
                    <OutlinedInput
                        name="currentAutoInsurance"
                        labelWidth={this.state.labelWidth}
                        id="outlined-currentAutoInsurance-native-simple"
                    />
                    }
                >
                    <option value="" />
                    <option value={'Yes'}>Yes</option>
                    <option value={'No'}>No</option>
                </Select>
            </FormControl>

            <StepLabel className={classes.stepLabel}>Auto History</StepLabel>
            <FormControl 
                variant="outlined" 
                margin="normal" 
                className={classes.dropDownForm}
            >
                <InputLabel
                    ref={ref => {
                        this.InputLabelRef = ref;
                        }}
                        htmlFor="outlined-tickets-native-simple"
                >
                    Do you have any tickets?
                </InputLabel>
                <Select
                    native
                    value={this.state.tickets}
                    onChange={this.handleChange('tickets')}
                    input={
                    <OutlinedInput
                        name="tickets"
                        labelWidth={this.state.labelWidth}
                        id="outlined-tickets-native-simple"
                    />
                    }
                >
                    <option value="" />
                    <option value={'Yes'}>Yes</option>
                    <option value={'No'}>No</option>
                </Select>
            </FormControl>

            <StepLabel></StepLabel>

            <Button 
                className={classes.addDriverBtn} 
                variant="outlined" 
                color="primary"
                onClick={this.addDriver}
            >
                + Add another driver
            </Button>

            <Button 
                className={classes.nextBtn} 
                variant="outlined" 
                color="primary"
                onClick={this.submitAppBtn}
            >
                Submit Application
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

