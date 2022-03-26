import React, { useEffect, useState } from "react"
import ErrorMsg from "./components/ErrorMsg"
import ImageUpload from "./components/ImageUpload"
import Image from "./components/Image"
import LookUpButton from "./components/LookUpButton"
import Results from "./components/Results"
import { ThemeProvider } from "styled-components"
import { theme } from "./Theme"
import "./App.css"

const App = () => {

    const [barcodeDetector, setBarcodeDetector] = useState()
    const [imageSrc, setImageSrc] = useState("")
    const [results, setResults] = useState([])

    useEffect(() => {
        // eslint-disable-next-line no-undef
        setBarcodeDetector(new BarcodeDetector())
    }, [])
    
    const [errorMsg, setErrorMsg] = useState("")

    const handleError = (error) => {
        setErrorMsg(error)
        setTimeout(() => setErrorMsg(""), 2000)
    }

    return (
        <ThemeProvider theme={theme}>
            <div>
                <ErrorMsg msg={errorMsg}/>
                <Image src={imageSrc}/>
                <ImageUpload setImageSrc={setImageSrc}/>
                <LookUpButton
                    barcodeDetector={barcodeDetector}
                    setResults={setResults}
                    handleError={handleError}
                />
                <Results results={results}/>
            </div>
        </ThemeProvider>
    )
}

export default App