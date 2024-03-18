import React from 'react';
import styled from 'styled-components';

const SDeleteBtnContainer = styled.div`
    width: 30px;
    height: 30px;
    font-size: 23px;
`;

interface DeleteBtnProps {
    onClick?(): void;
}

const DeleteBtn = ({onClick}: DeleteBtnProps) => {
    return (
        <SDeleteBtnContainer onClick={onClick}>
            X
        </SDeleteBtnContainer>
    );
};

export default DeleteBtn;