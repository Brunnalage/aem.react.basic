import React from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';
import {BtnErrorStyled} from './ButtonError.styled';

const ButtonError = ({type, title, style}) => {
    return (
        <BtnErrorStyled style={style} type={type}>{title}</BtnErrorStyled>
    )
};

export default ButtonError;