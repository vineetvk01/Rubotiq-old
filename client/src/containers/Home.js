import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { DContainer, DRow, DCol } from '../components/Container';
import DCard from '../components/Card';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

const MenuBox = styled(DCard)`
  padding: 6px;
  margin: 5px 0;
  background-color: rgb(238, 117, 219, 0.2);
  cursor: pointer; 
  &:hover {
    background-color: rgb(238, 117, 219, 0.5); 
  }
`
const MenuBody = styled(DCard.Body)`
  padding: 0;
  font-weight: bold;
`


const Home = (props) => {

  const { isLoggedIn } = props.auth;

  useEffect(() => {

  }, [])

  if (!isLoggedIn) {
    return <Redirect to='/login' />
  }

  return (
    <DContainer fluid>
      <DRow>
        <DCol md={3}>
          <MenuBox>
            <DCard.Link href='/home'>
              <MenuBody>Rubos</MenuBody>
            </DCard.Link>
          </MenuBox>
          <MenuBox>
            <DCard.Link href='/settings'>
              <MenuBody>Integrations</MenuBody>
            </DCard.Link>
          </MenuBox>
          <MenuBox>
            <DCard.Link href='/settings'>
              <MenuBody>Settings</MenuBody>
            </DCard.Link>
          </MenuBox>
        </DCol>
        <DCol md={9}>
          {props.children}
        </DCol>
      </DRow>
    </DContainer>
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


export default connect(mapStateToProps, mapDispatchToProps)(Home);
