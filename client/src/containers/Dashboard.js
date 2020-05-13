import React from 'react';
import DCard from '../components/Card';
import styled from 'styled-components';

const Board = styled(DCard)`
  width: 150px;
  height: 150px;
  padding: 6px;
  background-color: rgb(255,165,0, 0.9);
`

const BoardBody = styled(DCard.Body)`
  padding: 6px;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`

const Settings = (props) => {
  return (
    <>
      <h5>Dashboard :</h5>
      <hr />
      <h5>Your Tiqs :</h5>
      <Board>
        <BoardBody>
          Active 
        </BoardBody>
      </Board>
      <Board>
        <BoardBody>
          Active 
        </BoardBody>
      </Board>
      <Board>
        <BoardBody>
          Active 
        </BoardBody>
      </Board>
      
    </>
  )
}


export default Settings;