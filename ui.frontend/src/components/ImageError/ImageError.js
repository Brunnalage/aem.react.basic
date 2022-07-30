import React from 'react';
import {ImgErrorStyled} from './ImageError.styled';

const ImageError = ({src}) => {
    return(        
    <ImgErrorStyled src={src}></ImgErrorStyled>        
    )
}

export default ImageError;