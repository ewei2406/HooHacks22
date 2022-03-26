import React from "react"
import UPCService from "../UPCService"
import { ButtonWrapper } from "./ButtonStyle"

const LookUpButton = ({ barcodeDetector, setResults, handleError, imageSrc }) => {

    const handleLookup = e => {
        const image = document.getElementById("barcodeImage")
        barcodeDetector
            .detect(image)
            .then(b => {
                if (b.length > 0) {
                    const code = b[0].rawValue
                    console.log(code)
                    UPCService.lookupUPC(code)
                        .then(res => {
                            console.log(res)
                            setResults(res)
                        })
                        .catch(err => handleError("Unable to find UPC"))
                } else {
                    handleError("No UPC detected in image")
                }

            })
    }

    return (
        <ButtonWrapper onClick={imageSrc !== "" ? handleLookup : null} disabled={imageSrc === ""}>Go</ButtonWrapper>
    )
}

export default LookUpButton