import React from 'react';
import { connect } from 'react-redux';

const Home = (props) => (
  <div>

  </div>
);

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Home);
