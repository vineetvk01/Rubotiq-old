import React from 'react';
import DNavbar from '../components/Navbar';
import DNav from '../components/Nav';
import { connect } from 'react-redux';

import { logoutRequestAction } from '../actions/authActions';

const LoginButton = () => <DNav.Link href="/login"> Login </DNav.Link>
const ProfileButton = ({user, logout}) => (
  <DNav.Dropdown title={`👤 ${user.firstName}`}>  
    <DNav.DropdownItem href="/home" >Profile</DNav.DropdownItem>
    <DNav.DropdownItem onClick={(e) => logout()} >Logout </DNav.DropdownItem>
  </DNav.Dropdown>);
    
  

const Navigation = (props) => {
  const { isLoggedIn } = props.auth;
  
  return (
    <DNavbar expand='lg' variant='light' bg='light'>
      <DNavbar.Brand href="/"><img height='24px' src="./images/ico.png" alt="app-logo" /> dbdesign.dev</DNavbar.Brand>
      <DNavbar.Toggle aria-controls="responsive-navbar-nav" />
      <DNavbar.Collapse id="responsive-navbar-nav">
        <DNav className="mr-auto">
          <DNav.Link href="#feature">Features</DNav.Link>
          <DNav.Link href="/pricing">Pricing</DNav.Link>
          <DNav.Link href="https://github.com/vineetvk01/DBDesignTool/issues/" target="_blank">Found Bug ?</DNav.Link>
        </DNav>
        <DNav>
          {isLoggedIn ? <ProfileButton user={props.auth.user} logout={props.logoutUser} /> : <LoginButton />}
          <DNav.Link href="#"><span id="support">Support</span></DNav.Link>
        </DNav>
      </DNavbar.Collapse>
    </DNavbar>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutRequestAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
