import React from "react"
import UPCService from "../UPCService"

const LookUpButton = ({ barcodeDetector, setResults, handleError }) => {

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
        <button onClick={handleLookup}>LOOKUP</button>
    )
}

export default LookUpButton