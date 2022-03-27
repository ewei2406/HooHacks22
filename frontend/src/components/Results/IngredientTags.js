import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Item = styled.div`
    text-align: center;
    font-family: ${p => p.theme.bodyFont};
    font-size: ${p => Math.round(p.size / 4 + 6)}px;
    color: ${p => p.theme.textColor};
    position: relative;
    z-index: 2;
`

const Row = styled.div`
    cursor: pointer;
    display: flex;
    width: 150px;
    justify-content: space-between;
`

const IngredientTags = ({ data }) => {
    console.log(data)
    return(
        <>
            <Wrapper>
                {data.sort((a, b) => b.percent_estimate - a.percent_estimate).slice(0, Math.min(data.length, 4)).filter(i => !i.id.includes("%") && (Number(i.percent_max) > 0.02)).map((item, index) =>
                    <Row key={item.id} onClick={() => window.open("https://wikipedia.org/wiki/" + item.id.replace("en:", "").replace("-", "_"))}>
                        <Item
                            size={item.percent_estimate}
                        >~{Math.round(item.percent_estimate * 0.1) * 10}% </Item>
                        
                        <Item
                            size={item.percent_estimate}
                            
                        >{item.id.replace("en:", "").replace("-", " ")}</Item>
                    </Row>
                )}
            </Wrapper>
        </>
    )
}

export default IngredientTags