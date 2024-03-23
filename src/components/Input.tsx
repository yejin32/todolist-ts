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
interface InputProps {
    onChange(e: React.ChangeEvent<HTMLInputElement>): void;
    onKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void;
    inputText: string;
}

const Input = ({onChange, onKeyDown, inputText}: InputProps) => {
    return (
        <SInputContainer>
            <input type="text" 
            className='inputTodo' 
            placeholder='new task'
            onChange={(e) => onChange(e)}
            onKeyDown={(e) => onKeyDown(e)}
            value={inputText}
            />
            <button className='inputBtn'>+</button>
        </SInputContainer>
    );
};

export default Input;