import React, { useEffect, useState } from "react"
import UPCService from "./UPCService"
import styled from "styled-components"

const SmallImg = styled.img`
    width: 100px;
`

const App = () => {

    const [barcodeDetector, setBarcodeDetector] = useState()
    const [imageSrc, setImageSrc] = useState("")
    const [results, setResults] = useState([])

    useEffect(() => {
        // eslint-disable-next-line no-undef
        setBarcodeDetector(new BarcodeDetector())
    }, [])
    

    const onImageChange = e => {
        setImageSrc(URL.createObjectURL(e.target.files[0]))
    }

    const handleLookup = e => {
        const image = document.getElementById("barcodeImage")
        barcodeDetector
            .detect(image)
            .then(b => {
                const code = b[0].rawValue
                console.log(code)
                UPCService.lookupUPC(code)
                    .then(res => console.log(res))
                    .catch(err => console.log("DIdnt work"))
            })
    }
    
    return (
        <div>
            <SmallImg src={imageSrc} alt="" id="barcodeImage"/>
            <input type="file" name="myImage" onChange={onImageChange} />
            <button onClick={handleLookup}>LOOKUP</button>
        </div>
    )
}

export default App