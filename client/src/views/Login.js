import React, {useState, useEffect} from 'react';
import { DContainer, DRow, DCol } from '../components/Container';
import { DButton } from '../components/Button';
import DForm from '../components/Form';
import DAlert from '../components/Alert';
import {isEmail, isValidPassword} from '../utils/validator';
import { connect } from 'react-redux';
import { authRequestAction } from '../actions/authActions';
import  { Redirect } from 'react-router-dom'

import { VerticalModal } from '../containers/modal';

const Login = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({show: false});
  const [modalShow, setModalShow] = useState(false);

  const { isLoggedIn, error : errorMessage } = props.auth;
  
  useEffect(()=>{
    if(errorMessage && errorMessage.error){
      setError({show: true, message: errorMessage.error});
    }
  },[errorMessage]);
  
  if(isLoggedIn){
    return <Redirect to='/' />
  }

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

    setError({show: false});
    props.authRequest({email, password}); 
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
            <DButton variant="link" onClick={() => setModalShow(true)} >Signup ?</DButton> 
            <DButton variant="link" onClick={() => setModalShow(true)} >Forgot Password ?</DButton>
          </DForm>
          <hr />
        </DCol>
      </DRow>
      <DRow>
        <DCol md={{ span: 3, offset: 3 }}>
          <DButton variant="outline-dark" onClick={() => setModalShow(true)} block><img height="32" src="./images/google.svg" alt="Google Logo" /> | Google</DButton><br/>
        </DCol>
        <DCol md={3}>
          <DButton variant="outline-dark" onClick={() => setModalShow(true)} block><img height="32" src="./images/github.svg" alt="Google Logo" /> | Github</DButton><br/>
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
      <VerticalModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      ><h3 style={{textAlign: 'center'}}> Coming Soon! <span role="img" aria-label="Hurray">🎉</span> </h3></VerticalModal>
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
    authRequest: (user) => dispatch(authRequestAction(user)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
