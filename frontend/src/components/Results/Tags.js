import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    font-family: ${p => p.theme.bodyFont};
    flex-wrap: wrap;
    font-weight: 400;
    display: flex;
    font-size: 0.9rem;
    align-items: center;
    gap: 5px;
    margin-bottom: 5px;
`

const Wrapper2 = styled.div`
    font-family: ${p => p.theme.headingFont};
    font-weight: 800;
    font-size: 0.65em;
    margin-top: 3px;
    gap: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Tag = styled.div`
    background-color: ${p => p.theme.primaryColor};
    color: ${p => p.theme.accentColor};
    font-size: 0.6rem;
    border-radius: 5px;
    padding: 5px;
`

const Tags = ({ name, data }) => {
    return (
        <Wrapper2>
            { name }
            <Wrapper>
                {data.map(item =>
                        <Tag key={item}>{item}</Tag>
                    )}
            </Wrapper>
        </Wrapper2>
    )
}

export default Tags