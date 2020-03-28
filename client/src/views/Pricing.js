import React from 'react';
import { DContainer, DRow, DCol } from '../components/Container';

const Pricing = () => {
  return (
    <DContainer fluid>
      <DRow>
      <DCol md={{ span: 10, offset: 1 }}>
          <h3 className="bold-heading text-center"> It's Freee !  </h3>
        </DCol>
        <DCol xs={{ span: 10, offset: 1 }}>
          <p className="light-text text-center"> We don't any have paid plans now.. <br></br> You can contribute in the project and be the part of community </p>
        </DCol>
      </DRow>
    </DContainer>
  );
};

export default Pricing;
