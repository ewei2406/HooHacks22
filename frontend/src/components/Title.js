import React from "react"
import styled from "styled-components"

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    font-family: ${p => p.theme.headingFont};
    font-weight: 800;
    font-size: 2em;
    color: ${p => p.theme.accentColor};
`

const Logo = styled.img`
    height: 1em;
`

const Title = ({ text }) => {
    return (<TitleWrapper>🌱 {text}</TitleWrapper>)
}

export default Title