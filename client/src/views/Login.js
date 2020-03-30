import React, {useState} from 'react';
import { DContainer, DRow, DCol } from '../components/Container';
import { DButton } from '../components/Button';
import DForm from '../components/Form';
import DAlert from '../components/Alert';
import {isEmail, isValidPassword} from '../utils/validator';

import { authenticateUser } from '../apis/auth';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({show: true});

  const handleSubmit = (event) => {
    const validEmail = isEmail(email);
    const validPassword = isValidPassword(password);

    if(!validEmail){
      setError({show:true, message:'Please enter a valid Email.'});
      return;
    }
    if(!validPassword){
      setError({show:true, message:'Please enter a valid Password.'});
      return;
    }
    
    authenticateUser(email, password).then((loggedIn) => {
      if(loggedIn){
        console.log('Yes Logged in')
      }else{
        throw new Error('Not Logged In');
      }
    }).catch(error=>{
      console.log(error);
    });

  };

  return (
    <DContainer fluid>
      <DRow>
        <DCol md={{ span: 6, offset: 3 }}>
          <h5 className="bold-heading text-center">Login Now !</h5>
          <hr />
          <DAlert show={error.show} variant="danger" onClose={() => setError({show: false})} dismissible>
            {error.message}
          </DAlert>
          <DForm>
            <DForm.Row>
              <DForm.Group as={DCol} md="12" controlId="email">
              <DForm.Label>Email Address</DForm.Label>
                <DForm.Control
                  required
                  type="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                />
              </DForm.Group>
              <DForm.Group as={DCol} md="12" controlId="password">
              <DForm.Label>Password</DForm.Label>
                <DForm.Control
                  required
                  type="password"
                  placeholder="Enter your password"
                  autoComplete="off"
                  value={password}
                  onChange={event => setPassword(event.target.value)}
                />
              </DForm.Group>
            </DForm.Row>
            <DButton variant="outline-primary" onClick={handleSubmit}>Login</DButton> 
            <DButton variant="link">Signup ?</DButton> 
            <DButton variant="link">Forgot Password ?</DButton>
          </DForm>
          <hr />
        </DCol>
      </DRow>
      <DRow>
        <DCol md={{ span: 3, offset: 3 }}>
          <DButton variant="outline-dark" block><img height="32" src="./images/google.svg" alt="Google Logo" /> | Google</DButton><br/>
        </DCol>
        <DCol md={3}>
          <DButton variant="outline-dark" block><img height="32" src="./images/github.svg" alt="Google Logo" /> | Github</DButton><br/>
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
