import React from 'react';
import styled from 'styled-components';

const SInputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    .inputTodo {
        width: 330px;
        height: 40px;
        padding: 10px;
        margin: 20px;
        font-size: 23px;
        border: none;
        border-radius: 3px;
    }
    .inputTodo:focus {
        outline: none;
        border: 1px solid #000;
    
    }

    .inputBtn {
        height: 40px;
        padding: 10px;
    }
`

const Input = () => {
    return (
        <SInputContainer>
            <input type="text" className='inputTodo' placeholder='new task'/>
            <button className='inputBtn'>+</button>
        </SInputContainer>
    );
};

export default Input;