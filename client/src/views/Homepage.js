import React from 'react';
import { DContainer, DRow, DCol } from '../components/Container';
import { DButton } from '../components/Button';

const HomePage = () => {
  return (
    <DContainer fluid>
      <DRow>
        <DCol md={{ span: 4, offset: 4 }}>
          <p id="built-with-love" className="text-center"> Built with <span role="img" aria-label="heart"> &#128147; </span> </p>
        </DCol>
      </DRow>
      <br />
      <DRow>
        <DCol md={{ span: 10, offset: 1 }}>
          <h3 className="bold-heading text-center"> Draw Entity-Relationship Diagrams, Painlessly </h3>
        </DCol>
        <DCol xs={{ span: 10, offset: 1 }}>
          <p className="light-text text-center"> A free, simple tool to draw ER diagrams by just writing code. <br></br>Designed for developers and data analysts. </p>
        </DCol>
      </DRow>
      <br />
      <DRow>
        <DCol md={{ span: 4, offset: 4 }} xs={{ span: 10, offset: 1 }}>
          <DButton variant="dark" size="lg" disabled block>Create Diagram Now</DButton>
          <p className="light-text text-center">coming soon</p>
        </DCol>
      </DRow>
      <div style={{height: '50px'}} />
      <DRow>
        <DCol md={{ span: 10, offset: 1 }}>
          <h3 className="bold-heading text-center"> Why DBDesign.Dev ? </h3>
        </DCol>
      </DRow>
      <div style={{height: '50px'}} />
      <DRow>
        <DCol md={{ span: 8, offset: 2 }}>
          <DRow>
            <DCol md={6}>
              <img className="IMG80" src="./images/team.svg" alt="user-sharing" />
              <h4 className="bold-heading">One Click Sharing</h4>
              <p className="light-text"> Share your diagrams online with your colleagues and customers with just one click. </p>
            </DCol>
            <DCol md={6}>
              <img className="IMG80" src="./images/download.svg" alt="user-sharing" />
              <h4 className="bold-heading">Export to Images and PDFs</h4>
              <p className="light-text"> Create beautiful PDFs of your ER diagram to circulate internally. Who says ERDs are so difficult to create? </p>
            </DCol>
          </DRow>
        </DCol>
      </DRow>
    </DContainer>
  )
}

export default HomePage;