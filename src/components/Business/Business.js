import React from 'react';
import { connect } from 'react-redux';

const Business = (props) => (
  <div>

  </div>
);

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Business);
