import React from 'react';
import { connect } from 'react-redux';

const Auto = (props) => (
  <div>

  </div>
);

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Auto);
