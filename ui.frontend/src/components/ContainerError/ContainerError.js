import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import ImageError from "../ImageError/ImageError";
import TitleError from "../titleError/TitleError";
import ParagraphError from "../ParagraphError/ParagraphError";
import ButtonError from "../ButtonError/ButtonError";
import { ContainerErrorStyled } from "./ContainerError.styled";

const ContainerError = ({ containerError }) => {
    return (
        <>
            {containerError.map(({ titleText, colorTitle, paragraph, colorParagraph, buttonText, colorButtonText, colorButton, errorImage = {} }, index) => (
                <ContainerErrorStyled key={index}>
                    <ImageError src={errorImage.src}/>
                    <div>
                    <TitleError style={{color: colorTitle}} title={titleText}/>
                    <ParagraphError style={{color: colorParagraph}} title={paragraph}/>
                    <ButtonError style={{color: colorButtonText, background: colorButton}} title={buttonText}/>
                    </div>
                </ContainerErrorStyled>
            ))}
        </>
    )
}

ContainerError.defaultProps = {
    containerError: [
        {
            titleText: "Enter title here",
            colorTitle: "#000000",
            paragraph: "Enter paragraph text here",
            colorParagraph: "#000000",
            buttonText: "Enter button text here",
            colorButtonText: "#F1F1F1",
            colorButton: "#000000",
            errorImage: {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/-Insert_image_here-.svg/640px--Insert_image_here-.svg.png",
             },
        },
    ],
};

export default MapTo("reactapp/components/container-error")(ContainerError);