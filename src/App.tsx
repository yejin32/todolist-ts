import React from 'react';
import styled from 'styled-components';
import TodoList from './components/TodoList';

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
        <TodoList/>
      </div>
    </SMainContainer>
  );
}

export default App;
