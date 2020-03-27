import React from 'react';
import { DContainer, DRow, DCol } from '../components/Container';

const Footer = () => {
  return (
    <DContainer fluid>
      <DRow>
        <DCol xs={4}>
          <ul>
            <li><a href="mailto:vineetvk01@gmail.com?Subject=DBDesignTool%20Feedback:" target="_top">Feedback</a></li>
            <li><a href="https://github.com/vineetvk01/DBDesignTool/issues/" target="_blank" rel='noreferrer noopener'>Report Bug</a></li>
            <li><a href="https://github.com/vineetvk01/DBDesignTool/graphs/contributors" target="_blank" rel='noreferrer noopener'>Contributors</a></li>
          </ul>
        </DCol>
        <DCol md={{ span: 4, offset: 4 }} xs={8}>
          <h5><img height="24px" src="./images/database.png" alt="database-icon" /> | DBDesign.Dev</h5>
          <p className="light-text">Want to contribute in this,<br /> <u><a href="https://github.com/vineetvk01/DBDesignTool/" target="_blank" rel="noopener noreferrer">PROJECT</a></u> ?</p>
        </DCol>
      </DRow>
      <DRow>
        <DCol md={{ span: 4, offset: 4 }} xs={{ span: 10, offset: 1 }} >
          <p className="light-text text-center"> &#169; Copyright 2020. All rights reserved.</p>
        </DCol>
      </DRow>
    </DContainer>
  );
};

export default Footer;
