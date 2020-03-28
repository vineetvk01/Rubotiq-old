import React from 'react';
import DNavbar from '../components/Navbar';
import DNav from '../components/Nav';

const Navigation = () => {
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
          <DNav.Link eventKey={1} href="#"><span id="support">Support</span></DNav.Link>
          <DNav.Link eventKey={2} href="/login">
            Login
          </DNav.Link>
        </DNav>
      </DNavbar.Collapse>
    </DNavbar>
  );
};

export default Navigation;
