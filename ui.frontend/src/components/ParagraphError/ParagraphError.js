import React from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';
import {ParagraphErrorStyled, PContainer} from './ParagraphError.styled';

const ParagraphError = ({title}) => {
    return (
        <PContainer>
            <ParagraphErrorStyled>{title}</ParagraphErrorStyled>
        </PContainer>
    )
};

export default ParagraphError;
