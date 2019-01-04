import React from 'react';
import { connect } from 'react-redux';

const Life = (props) => (
  <div>

  </div>
);

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Life);
