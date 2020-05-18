import React from 'react';
import { DRow, DCol } from '../components/Container';
import DCard from '../components/Card';
import styled from 'styled-components';


const Board = styled(DCard)`
  height: 70px;
  padding: 6px;
  background-color: rgb(255, 255, 255, 0.9);
`

const BoardBody = styled(DCard.Body)`
  padding: 6px;
  color: #333;
  font-weight: bold;
  font-size: 18px;
`

const Tiqs = (props) => {

  const [from, to, name] = props.children;

  return (
    <Board>
      <BoardBody>
        <DRow>
          <DCol md={2}>
            {from}
          </DCol>
          <DCol md={2}>
            {to}
          </DCol>
          <DCol md={6}>
            {name}
          </DCol>
          <DCol md={2}>
            on
          </DCol>
        </DRow>
      </BoardBody>
    </Board>
  )
}

export default Tiqs;