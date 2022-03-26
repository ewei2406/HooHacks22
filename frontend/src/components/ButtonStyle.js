import styled from "styled-components"

export const ButtonWrapper = styled.div`
    display: flex;
    flex-grow: 2;
    justify-content: center;
    align-items: center;
    cursor: ${p => p.disabled ? "not-allowed" : "pointer"};
    border-radius: 5px;
    font-size: 0.75em;
    border: 2px solid ${p => p.disabled ? p.theme.disabledColor : p.theme.accentColor};
    color: ${p => p.disabled ? p.theme.disabledColor : p.theme.accentColor};
    font-family: ${p => p.theme.bodyFont};
    padding: 7.5px;
    position: relative;
    box-sizing: border-box;

    transition: 0.1s ease all;
    overflow: hidden;
    z-index: 1;

    &:after {
        content: "";
        z-index: -1;
        display: block;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        transform: translateX(-100%);
        left: 0;
        background-color: ${p => p.disabled ? p.theme.disabledColor : p.theme.accentColor};
        transition: 0.1s ease all;
    }

    &:hover {
        color: ${p => p.theme.invertedTextColor};
    }

    &:hover:after {
        transform: translateX(0);
    }
`