import React from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';
import { TitleErrorStyled, TitleContainer } from './TitleError.styled';

const TitleError = ({title, style}) => {
    return(
        <TitleContainer>
        <TitleErrorStyled style={style}>{title}</TitleErrorStyled>
        </TitleContainer>
    )
}

export default TitleError;
