import React from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';
import {FooterErrorContainer, TextFooter } from './FooterError.styled.js';

const FooterError = (props) => {
    const textdefault = "created by";   
    const linkdefault = "usernamesite.io";
    const namedefault = "username";    
    const colordefault = "#BDBDBD"
    const usernamecolordefault = "#BDBDBD"

    return (
        <FooterErrorContainer>
            <TextFooter style={{color: props.textcolor ? props.textcolor : colordefault}}>{props.text ? props.text : textdefault}</TextFooter>
            <TextFooter className={`username`} style={{color: props.usercolor ? props.usercolor : usernamecolordefault}}>{props.name ? props.name : namedefault}</TextFooter>
            <TextFooter style={{color: props.textcolor ? props.textcolor : colordefault}}>- {props.link ? props.link : linkdefault}</TextFooter>
        </FooterErrorContainer>
    )
};

export default MapTo('reactapp/components/footer-error')(FooterError);