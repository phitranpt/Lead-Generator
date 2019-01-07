import React, { Component } from 'react';
import { connect } from 'react-redux';

import propTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ReactDOM from 'react-dom';

import {
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
    miles: {
        width: '100%'
    },
    numYearForm: {
        width: '100%',
    },
    stepLabel: {
        marginTop: 30,
    },
    radio: {
        display: 'inline'
    },
});

class AutoForm extends Component {

    state = {
        year: '',
        make: '',
        model: '',
        style: '',
        numYear: '',
        finance: '',
        miles: '',
      };
    
      componentDidMount() {
        this.setState({
          labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        });
      }
    
      handleChange = name => event => {
        this.setState({ [name]: event.target.value });
      };

  render() {
    const { classes } = this.props;
      return (
        <div>

            <StepLabel className={classes.stepLabel}>What vehicle would you like to insure?</StepLabel>
            <FormControl variant="outlined" margin="normal" className={classes.formControl}>
                <InputLabel
                    ref={ref => {
                    this.InputLabelRef = ref;
                    }}
                    htmlFor="outlined-year-native-simple"
                >
                    Year
                </InputLabel>
                <Select
                    native
                    value={this.state.year}
                    onChange={this.handleChange('year')}
                    input={
                    <OutlinedInput
                        name="year"
                        labelWidth={this.state.labelWidth}
                        id="outlined-year-native-simple"
                    />
                    }
                >
                    <option value="Year" />
                    <option value={2019}>2019</option>
                    <option value={2018}>2018</option>
                    <option value={2017}>2017</option>
                    <option value={2016}>2016</option>
                    <option value={2015}>2015</option>
                    <option value={2014}>2014</option>
                    <option value={2013}>2013</option>
                    <option value={2012}>2012</option>
                    <option value={2011}>2011</option>
                    <option value={2010}>2010</option>
                    <option value={2009}>2009</option>
                    <option value={2008}>2008</option>
                    <option value={2007}>2007</option>
                    <option value={2006}>2006</option>
                    <option value={2005}>2005</option>
                    <option value={2004}>2004</option>
                    <option value={2003}>2003</option>
                    <option value={2002}>2002</option>
                    <option value={2001}>2001</option>
                    <option value={2000}>2000</option>
                </Select>
            </FormControl>

            <TextField
                required
                id="outlined-required"
                label="Make"
                className={classes.formControlTwo}
                margin="normal"
                variant="outlined"
                value={this.state.make}
                onChange={this.handleChange('make')}
            />
            
            <TextField
                required
                id="outlined-required"
                label="Model"
                className={classes.formControl}
                margin="normal"
                variant="outlined"
                value={this.state.model}
                onChange={this.handleChange('model')}
            />

            <TextField
                required
                id="outlined-required"
                label="Style"
                className={classes.formControlTwo}
                margin="normal"
                variant="outlined"
                value={this.state.style}
                onChange={this.handleChange('style')}
            />

            <StepLabel className={classes.stepLabel}>How many years have you had this vehicle?</StepLabel>
            <FormControl variant="outlined" margin="normal" className={classes.numYearForm}>
                <InputLabel
                    ref={ref => {
                        this.InputLabelRef = ref;
                        }}
                        htmlFor="outlined-numYear-native-simple"
                >
                    Please select number of years
                </InputLabel>
                <Select
                    native
                    value={this.state.numYear}
                    onChange={this.handleChange('numYear')}
                    input={
                    <OutlinedInput
                        name="numYear"
                        labelWidth={this.state.labelWidth}
                        id="outlined-numYear-native-simple"
                    />
                    }
                >
                    <option value="" />
                    <option value={0-1}>Less than 1 year</option>
                    <option value={1}>1 years</option>
                    <option value={2}>2 years</option>
                    <option value={3}>3 years</option>
                    <option value={4}>4 years</option>
                    <option value={5}>5 years</option>
                    <option value={6}>6 years</option>
                    <option value={7}>7 years</option>
                    <option value={8}>8 years</option>
                    <option value={9}>9 years</option>
                    <option value={10}>10+ years</option>
                </Select>
            </FormControl>
                
            <StepLabel className={classes.stepLabel}>Do you own, lease, or finance this vehicle?</StepLabel>
            <RadioGroup
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
            <FormControl variant="outlined" margin="normal" className={classes.miles}>
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
                name="theft"
                className={classes.radio}
                value={this.state.theft}
                onChange={this.handleChange('theft')}
            >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
        </div>
      );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

AutoForm.propTypes = {
  classes: propTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(AutoForm));

