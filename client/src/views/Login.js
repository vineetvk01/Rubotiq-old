import React from 'react';
import { DContainer, DRow, DCol } from '../components/Container';
import { DButton } from '../components/Button';

const Login = () => {
  return (
    <DContainer fluid>
      <DRow>
        <DCol md={{ span: 6, offset: 3 }}>
          <h5 className="bold-heading text-center">Connect Now !</h5>
          <hr />
          <DButton variant="outline-dark" size="lg" block><img height="32" src="./images/google.svg" alt="Google Logo" /> | Google</DButton>
          <DButton variant="outline-dark" size="lg" block><img height="32" src="./images/github.svg" alt="Google Logo" /> | Github</DButton>
        </DCol>
      </DRow>
      <div style={{ height: '100px' }} />
      <DRow>
        <DCol xs={4}>
          <div className="text-center">
            <img height="80" src="./images/login/1.svg" alt="Person Running" />
          </div>
        </DCol>
        <DCol xs={4}>
          <div className="text-center">
            <img height="80" src="./images/login/2.svg" alt="Group" />
          </div>
        </DCol>
        <DCol xs={4}>
          <div className="text-center">
            <img height="80" src="./images/login/3.svg" alt="Chat" />
          </div>
        </DCol>
      </DRow>
    </DContainer>
  );
};

export default Login;
