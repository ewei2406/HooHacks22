import React from "react"
import { ButtonWrapper } from "./ButtonStyle"
import styled from "styled-components"

const HiddenInput = styled.input`
    display: none;
`

const ImageUpload = ({ setImageSrc }) => {

    const onImageChange = e => {
        setImageSrc(URL.createObjectURL(e.target.files[0]))
    }

    return(

        <ButtonWrapper>
            <label>
                <HiddenInput type="file" name="myImage" onChange={onImageChange} />
                Custom Upload
            </label>
        </ButtonWrapper>
    )
}

export default ImageUpload