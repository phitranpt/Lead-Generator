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
    TextField} from '@material-ui/core';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: 600,
        background: '',
      },
      formControl: {
        minWidth: 260,
        height: 65,
        margin: 6,
      },
      selectEmpty: {
        marginTop: theme.spacing.unit * 2,
      },
});

class AutoForm extends Component {

    state = {
        year: '',
        make: '',
        model: '',
        style: '',
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
        <form className={classes.root}>
            <FormControl variant="outlined" className={classes.formControl}>
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
                className={classes.formControl}
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
                className={classes.formControl}
                margin="normal"
                variant="outlined"
                value={this.state.style}
                onChange={this.handleChange('style')}
            />
        </form>
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

