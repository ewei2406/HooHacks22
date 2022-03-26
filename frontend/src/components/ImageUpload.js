import React from "react"
import { ButtonWrapper } from "./ButtonStyle"
import styled from "styled-components"

const HiddenInput = styled.input`
    display: none;
`

const LabelWrapper = styled.label`
    cursor: pointer;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
`

const ImageUpload = ({ setImageSrc }) => {

    const onImageChange = e => {
        setImageSrc(
            URL.createObjectURL(e.target.files[0]))
    }

    return(

        <ButtonWrapper>
            <LabelWrapper>
                <HiddenInput type="file" name="myImage" onChange={onImageChange} />
                Upload Image
            </LabelWrapper>
        </ButtonWrapper>
    )
}

export default ImageUpload