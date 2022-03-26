import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    font-family: ${p => p.theme.bodyFont};
    display: flex;
    align-items: center;
    gap: 5px;
`

const Tag = styled.div`
    background-color: ${p => p.theme.slightlyDarkenedColor};
    font-size: 0.75em;
    border-radius: 5px;
    padding: 5px;
`

const Tags = ({ name, data }) => {
    return (
        <Wrapper>
            {name}:
            {data.map(item =>
                    <Tag key={item}>{item}</Tag>
                )}
        </Wrapper>
    )
}

export default Tags