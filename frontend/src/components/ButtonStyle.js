import styled from "styled-components"

export const ButtonWrapper = styled.div`
    border-radius: 5px;
    font-size: 0.75em;
    background-color: ${p => p.theme.accentColor};
    color: ${p => p.theme.invertedTextColor};
    font-family: ${p => p.theme.bodyFont};
    padding: 7.5px;
`