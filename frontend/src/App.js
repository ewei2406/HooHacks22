import React, { useEffect, useState } from "react"
import ErrorMsg from "./components/ErrorMsg"
import ImageUpload from "./components/ImageUpload"
import Image from "./components/Image"
import LookUpButton from "./components/LookUpButton"
import Results from "./components/Results"
import Title from "./components/Title"
import { ThemeProvider } from "styled-components"
import { theme } from "./Theme"
import "./App.css"
import styled from "styled-components"
import UPCService from "./UPCService"

const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

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
            <Body>
                <ErrorMsg msg={errorMsg} />
                <Title text="HELLO" />
                <Image src={imageSrc}/>
                <ImageUpload 
                    setImageSrc={setImageSrc}
                    barcodeDetector={barcodeDetector}
                    setResults={setResults}
                    handleError={handleError}
                />
                <LookUpButton
                    barcodeDetector={barcodeDetector}
                    setResults={setResults}
                    handleError={handleError}
                />
                <Results results={results}/>
            </Body>
        </ThemeProvider>
    )
}

export default App