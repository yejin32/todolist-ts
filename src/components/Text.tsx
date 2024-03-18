import React from 'react';
import styled from 'styled-components';

const STextContainer = styled.div`
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 20px;

    .completedText {
    text-decoration: line-through;
}
`;

interface TextProps {
    completed?: boolean;
    children: React.ReactNode;
}

const Text = ({completed, children}: TextProps) => {
    return (
        <STextContainer className={`text ${completed ? 'completedText' : ''}`}>
            {children}
        </STextContainer>
    );
};

export default Text;