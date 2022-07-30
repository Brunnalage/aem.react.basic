import React from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';
import { TitleErrorStyled, TitleContainer } from './TitleError.styled';

const TitleError = ({title}) => {
    return(
        <TitleContainer>
        <TitleErrorStyled>{title}</TitleErrorStyled>
        </TitleContainer>
    )
}

export default TitleError;
