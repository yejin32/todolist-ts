import React from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';
import Text from './Text';
import DeleteBtn from './DeleteBtn';

const STodo = styled.div`
    display:flex;
    align-items: center;
    width: 100%;
    padding: 14px 20px;
    `;

interface TodoProps {
    completed?: boolean;
    text: string;
}

const Todo = ({completed, text}: TodoProps) => {
    return (
        <STodo>
            <Checkbox checked={completed}/>
            <Text completed={completed}>
                {text}
            </Text>
            <DeleteBtn/>
        </STodo>
    );
};

export default Todo;