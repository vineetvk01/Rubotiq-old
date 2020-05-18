import React from 'react';
import DCard from '../components/Card';
import { DRow, DCol } from '../components/Container';
import styled from 'styled-components';
import Tiqs  from './Tiqs';

const SubHeading = styled.h5`
  font-weight: bold;
`

const Settings = (props) => {
  return (
    <>
      <h5>Dashboard :</h5>
      <hr />
      <SubHeading>YOUR TIQS:</SubHeading>
      <DRow>
        <DCol md={12}>
          {/* <Board>
            <BoardBody>
              Facebook > Instagram
            </BoardBody>
          </Board> */}
          <Tiqs>
            
            <p>Hello2</p>
            <p>Hello3</p>
            <p>Hello4</p>
          </Tiqs>
        </DCol>
      </DRow>

    </>
  )
}


export default Settings;