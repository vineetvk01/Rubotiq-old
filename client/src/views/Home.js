import React from 'react';
import { DContainer, DRow, DCol } from '../components/Container'; 
import DImage from '../components/Image';
import UserInfo from '../containers/UserInfo';
import Diagrams from '../containers/Diagrams';

const Home = (props) => {

  const user = {firstName: 'Vineet', lastName: 'Srivastav', location:'Delhi, India', gender:'Male'}

  return (
    <DContainer fluid>
      <DRow>
        <DCol xs={2}>
          <DImage src="./images/male.svg" width="100%" thumbnail />
        </DCol>
        <DCol xs={10}>
          <UserInfo user={user} />
          <hr />
          <Diagrams />
        </DCol>
      </DRow>
    </DContainer>
  );
};

export default Home;
