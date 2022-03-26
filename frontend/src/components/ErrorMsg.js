import React from "react"
import styled from "styled-components"

const ErrorWrapper = styled.div`
    border: 1px solid red;
`

const ErrorMsg = ({ msg }) => {
    if (msg === "") return (<></>)
    else return (<ErrorWrapper>{msg}</ErrorWrapper>)
}

export default ErrorMsg