import styled from "styled-components";

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 20px 15px 20px;
    box-sizing: border-box;
    width: 100%;
    border-radius:10px;
    font-family: ${p => p.theme.headingFont};
    background-color: ${p => p.theme.complementColor};
`


export const Title = styled.div`
    font-size: 1.5em;
    margin-bottom: 5px;
    text-align: center;
    font-family: ${p => p.theme.headingFont};
    font-weight: 800;
    color: ${p => p.theme.accentColor};
`

export const Subtitle = styled.div`
    font-size: 0.75em;
    text-align: center;
    font-family: ${p => p.theme.headingFont};
    font-weight: 800;
`