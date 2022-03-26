import React from "react"
import styled from "styled-components"

const ErrorWrapper = styled.div`
    border: 2px solid red;
    font-family: ${p => p.theme.bodyFont};
    border-radius: 5px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
    background-color: white;
    padding: 5px;
    text-align: center;
`

const ErrorMsg = ({ msg }) => {
    if (msg === "") return (<></>)
    else return (<ErrorWrapper>Error: {msg}</ErrorWrapper>)
}

export default ErrorMsg