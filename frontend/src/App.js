import React, { useEffect, useState } from "react"
import ErrorMsg from "./components/ErrorMsg"
import Results from "./components/Results/Results"
import Title from "./components/Title"
import { ThemeProvider } from "styled-components"
import { theme } from "./Theme"
import "./App.css"
import styled from "styled-components"
import InputBox from "./components/InputBox"
import Info from "./components/Info"

const Body = styled.div`
    color: ${p => p.theme.textColor};
    padding: 10px 20px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const App = () => {

    const [barcodeDetector, setBarcodeDetector] = useState()
    const [imageSrc, setImageSrc] = useState("")
    const [results, setResults] = useState()

    useEffect(() => {
        if ('BarcodeDetector' in window) {
            // eslint-disable-next-line no-undef
            setBarcodeDetector(new BarcodeDetector())
        } else {
            handleError("Barcode Detector not supported.")
        }
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
                <Title text="GreenCode" />

                <InputBox 
                    imageSrc={imageSrc}
                    setImageSrc={setImageSrc} 
                    barcodeDetector={barcodeDetector} 
                    setResults={setResults} 
                    handleError={handleError}/>
                
                <Results results={results}/>
                
                <Info/>
            </Body>
        </ThemeProvider>
    )
}

export default App