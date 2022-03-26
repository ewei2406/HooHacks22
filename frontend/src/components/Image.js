import React from "react"
import styled from "styled-components"

const ImageWrapper = styled.div`
    overflow: hidden;
    width: 200px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${p => p.theme.bodyFont};
    color: ${p => p.theme.disabledColor};
    background-color: ${p => p.theme.slightlyDarkenedColor};
    box-sizing: border-box;
    border-radius: 5px;
`

const ImageStyle = styled.img`
    width: 100%;
`

const Image = ({ src }) => {

    return (
        <ImageWrapper>
            {src === "" ? "No image selected..." : <ImageStyle src={src} alt="" id="barcodeImage" />}
        </ImageWrapper>
    )
    
}

export default Image