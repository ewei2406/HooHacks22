import styled from "styled-components"

const Wrapper = styled.div`
    border-radius: 100%;
    width: 50px;
    height: 50px;
    background-color: ${p => p.noColor ? p.theme.primaryColor : getColorRGB(p.value, 255, 200, 200, 200, 240, 180)};
    color: ${p => p.noColor ? p.theme.accentColor : getColorRGB(p.value, 255, 0, 0, 118, 186, 27)};
    font-family: ${p => p.theme.headingFont};
    font-weight: 400;
    display: flex;
    justify-content: center;
    font-size: 1rem;
    align-items: center;
    justify-content: center;
    gap: 2px;
`

const Wrapper2 = styled.div`
    display: flex;
    align-items: center;
    text-align:center;
    margin-bottom: 5px;
    flex-direction: column;
    font-family: ${p => p.theme.headingFont};
    font-weight: 800;
    gap: 7px;
    font-size: 0.75em;
    width: 70px;
`

const IconWrapper = styled.div`
    font-size: 0.8em;
    display: flex;
    justify-content: center;
    align-items: center;
`

const getColorRGB = (value, r0, g0, b0, r1, g1, b1) => {
    const pct = value / 100
    const r = (r1 - r0) * pct + r0
    const g = (g1 - g0) * pct + g0
    const b = (b1 - b0) * pct + b0

    return `rgb(${r}, ${g}, ${b})`
}

const Scale = ({ value, name, icon, noColor, suffix }) => {

    return (
        <Wrapper2>
            <Wrapper value={value} noColor={noColor || value === -999}>
                {value === -999 ? "?" : Math.round(value * 10) / 10}{suffix}
                {icon ? <IconWrapper>{icon}</IconWrapper> : null}
            </Wrapper>
            {name}
        </Wrapper2>
    )
}

export default Scale