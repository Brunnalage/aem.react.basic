import React from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';
import {BtnErrorStyled} from './ButtonError.styled';

const ButtonError = ({type, title}) => {
    return (
        <BtnErrorStyled type={type}>{title}</BtnErrorStyled>
    )
};

export default ButtonError;