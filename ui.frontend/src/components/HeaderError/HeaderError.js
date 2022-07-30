import React from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';
import {HeaderContainer, HeaderErrorStyled} from './HeaderError.styled.js';

const HeaderError = (props) => {
    const textdefault = "Enter your text Here";    
    const colordefault = "#333333";
    return(
        <HeaderContainer>
            <HeaderErrorStyled style={{color: props.color ? props.color : colordefault}}>{props.text ? props.text : textdefault}</HeaderErrorStyled>
        </HeaderContainer>
    )
};

export default MapTo('reactapp/components/header-error')(HeaderError);