import React from "react"
import styled from "styled-components"

const TitleWrapper = styled.div`
    font-size:45px;
    text-align: center;
    line-height: 80px;
`

const TitleBorder = styled.div`
    width: 100%;
    height: 80px;
    background-color: ${p => p.theme.accentColor};

`

const Title = ({ text }) => {
    return ( <TitleBorder>
                <TitleWrapper>{text}</TitleWrapper>
            </TitleBorder> )
}

export default Title