import React from 'react';
import { DContainer, DRow, DCol } from '../components/Container';

const PaddedHomeLayout = (Component) => {
  return (props) => (
  <DContainer fluid>
    <DRow>
      <DCol md={{ span: 10, offset: 1 }} sm={{span:12}}>
        <Component {...props} />
      </DCol>
    </DRow>
  </DContainer>
  );
};

export default PaddedHomeLayout;