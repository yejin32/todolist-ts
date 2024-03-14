import React from 'react';
import Input from './components/Input';
import styled from 'styled-components';

const SMainContainer = styled.div`
    width:100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .todoContainer {
      width: 460px;
      height: 660px;
      background-color: aliceblue;
    }
    `

function App() {
  return (
    <SMainContainer>
      <div className='todoContainer'>
        <Input/>
      </div>
    </SMainContainer>
  );
}

export default App;