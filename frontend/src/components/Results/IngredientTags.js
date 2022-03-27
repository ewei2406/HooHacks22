import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: ${p => p.theme.bodyFont};
    color: ${p => p.theme.textColor};
`

const Item = styled.div`
    font-size: ${p => Math.round(Number(p.size) / 3 + 6)}px;
    text-align: center;
    text-transform: capitalize;
    position: relative;
    z-index: 2;
`

const Row = styled.div`
    cursor: pointer;
    display: flex;
    width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: space-between;
`

const IngredientTags = ({ data }) => {
    console.log(data)
    return(
        <>
            <Wrapper>
                {data.length ? data
                    .sort((a, b) => b.percent_estimate - a.percent_estimate)
                    .slice(0, Math.min(data.length, 4))
                    .filter(i => !i.id.includes("%") && (Number(i.percent_max) > 0.02))
                    .filter(i => i.id.slice(0, 2) === "en")
                    .map((item, index) =>
                    <Row key={item.id} onClick={() => window.open("https://wikipedia.org/wiki/" + item.id.replace("en:", "").replace("-", "_"))}>
                        <Item
                            size={item.percent_estimate}
                        >~{Math.round(item.percent_estimate * 0.1) * 10}% </Item>
                        
                        <Item
                            size={item.percent_estimate}
                            style={{width: 150}}
                            >{item.id.replace("en:", "").replaceAll("-", " ")}</Item>
                    </Row>
                ) : "No data"}
            </Wrapper>
        </>
    )
}

export default IngredientTags