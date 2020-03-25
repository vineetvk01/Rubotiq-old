import React from 'react';
import { Nav } from 'react-bootstrap';

export default class DNav extends React.Component {
  static Link = (props) => <Nav.Link {...props}/>
  static Dropdown = (props) => <Nav.Dropdown {...props}/>

  render() {
    return (
      <Nav {...this.props}/>
    );
  }
}