import Card from 'react-bootstrap/Card';
import React, { Component } from 'react';

export default class DCard extends Component{

  static Body = (props) => <Card.Body {...props}/>

  render(){
    return <Card {...this.props}/>
  }
}