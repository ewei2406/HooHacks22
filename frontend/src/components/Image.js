import React from "react"
import styled from "styled-components"

const ImageWrapper = styled.img`
    width: 200px;
    border: 2px solid #919191;
    border-radius:10px;
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