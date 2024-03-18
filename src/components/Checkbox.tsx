import React from 'react';
import styled from 'styled-components';

const SChceckboxContainer = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border: 1px solid black;

    .check {
        position: absolute;
        font-size: 32px;
    }
`

interface CheckboxProps {
    checked?: boolean;
    onClick?(): void;
}

const Checkbox = ({checked, onClick}: CheckboxProps) => {
    return (
        <SChceckboxContainer onClick={onClick}>
            <div className='check'>
                {checked && '✓'}
            </div>
        </SChceckboxContainer>
    );
};

export default Checkbox;