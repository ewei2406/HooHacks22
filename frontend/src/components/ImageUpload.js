import React, {useEffect} from "react"
import { ButtonWrapper } from "./ButtonStyle"
import styled from "styled-components"
import UPCService from "../UPCService"

const HiddenInput = styled.input`
    display: none;
`

const ImageUpload = ({ setImageSrc, barcodeDetector, setResults, handleError }) => {

    const onImageChange = e => {
        setImageSrc(
            URL.createObjectURL(e.target.files[0]))
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