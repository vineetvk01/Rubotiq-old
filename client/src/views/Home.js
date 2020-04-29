import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import { DContainer, DRow, DCol } from '../components/Container'; 
import DCard from '../components/Card'; 
import  { Redirect } from 'react-router-dom';
import PaddedHomeLayout from '../hoc/PadHome.hoc';
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
`

const Board = styled(DCard)`
  width: 150px;
  height: 150px;
  padding: 6px;
  background-color: rgb(255,165,0, 0.9);
`

const BoardBody = styled(DCard.Body)`
  padding: 6px;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`


const Home = (props) => {

  const { isLoggedIn } = props.auth;

  useEffect(()=>{
    
  },[])

  if(!isLoggedIn){
    return <Redirect to='/login' />
  }

  return (
    <DContainer fluid>
      <DRow>
        <DCol md={3}>
          <MenuBox>
            <MenuBody>Boards</MenuBody>
          </MenuBox>
          <MenuBox>
            <MenuBody>Templates</MenuBody>
          </MenuBox>
        </DCol>
        <DCol md={9}>
          <h5>Your Boards :</h5>
          <Board>
            <BoardBody>
              First
            </BoardBody>
          </Board>
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

export default connect(mapStateToProps,mapDispatchToProps)(PaddedHomeLayout(Home));
