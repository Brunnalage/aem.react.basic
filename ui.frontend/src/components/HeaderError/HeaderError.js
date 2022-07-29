import React from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';
import {HeaderContainer, HeaderErrorStyled} from './HeaderError.styled.js';

const HeaderError = (props) => {
    const textdefault = "Enter your text Here";    
    return(
        <HeaderContainer>
            <HeaderErrorStyled style={{color: props.color}}>{props.text ? props.text : textdefault}</HeaderErrorStyled>
        </HeaderContainer>
    )
};

export default MapTo('reactapp/components/header-error')(HeaderError);