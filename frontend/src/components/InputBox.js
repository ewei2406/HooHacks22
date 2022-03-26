import { InputWrapper } from "../InputWrapper"
import Image from "./Image"
import ImageUpload from "./ImageUpload"
import LookUpButton from "./LookUpButton"
import styled from "styled-components"

const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 10px;
    justify-content: space-between;
`

const InputBox = ({ imageSrc, setImageSrc, barcodeDetector, setResults, handleError }) => {
    return (
        <InputWrapper>
            <Image src={imageSrc} />
            <RightColumn>
                <ImageUpload
                    setImageSrc={setImageSrc}
                />
                <LookUpButton
                    barcodeDetector={barcodeDetector}
                    setResults={setResults}
                    handleError={handleError}
                    imageSrc={imageSrc}
                />
            </RightColumn>
        </InputWrapper>
    )
}

export default InputBox