import React from 'react';
import { connect } from 'react-redux';
import PaddedHomeLayout from '../hoc/PadHome.hoc';
import Home from '../containers/Home';
import Settings from '../containers/Settings';


const SettingPage = (props) => {
  return (
    <Home {...props} >
      <Settings {...props} />
    </Home>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authRequest: () => dispatch({}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaddedHomeLayout(SettingPage));
