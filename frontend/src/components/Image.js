import React from "react"
import styled from "styled-components"

const ImageWrapper = styled.img`
    width: 200px;
    border: 5px solid red;
`

const Image = ({ src }) => {
    if (src === "") {
        return (<></>)
    } else {
        return (
            <ImageWrapper src={src} alt="" id="barcodeImage" />
        )
    }
}

export default Image