import React from "react"
import styled from "styled-components"

const TitleWrapper = styled.div`
`

const Title = ({ text }) => {
    return ( <TitleWrapper>{text}</TitleWrapper>)
}

export default Title