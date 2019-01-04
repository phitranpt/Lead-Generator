import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import Main from '../Main/Main';
import Auto from '../Auto/Auto';
import Home from '../Home/Home';
import Life from '../Life/Life';
import Business from '../Business/Business';
import Admin from '../Admin/Admin';

import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Redirect exact from="/" to="/main" />
            <Route
              exact
              path="/main"
              component={Main}
            />
            <Route
              exact
              path="/auto"
              component={Auto}
            />
            <Route
              exact
              path="/home"
              component={Home}
            />
            <Route
              exact
              path="/life"
              component={Life}
            />
            <Route
              exact
              path="/business"
              component={Business}
            />
            <ProtectedRoute
              exact
              path="/admin"
              component={Admin}
            />
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
