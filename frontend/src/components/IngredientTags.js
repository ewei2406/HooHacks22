import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`

const Title = styled.div`
    text-align: center;
    font-family: ${p => p.theme.headingFont};
    margin-top: 10px;
`

const Item = styled.div`
    cursor: pointer;
    overflow-wrap: break-word;
    word-wrap: break-word;
    text-align: center;
    hyphens: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55px;
    height: 55px;
    font-family: ${p => p.theme.bodyFont};
    position: relative;
    z-index: 2;
    font-size: 0.7em;

    &:after{
        z-index: -1;
        content: "";
        width: ${p => p.size / 2 + 20}px;
        height: ${p => p.size / 2 + 20}px;
        background-color: ${p => p.theme.slightlyDarkenedColor};
        position: absolute;
        border-radius: 100%;
    }
`

const IngredientTags = ({ data }) => {
    console.log(data)
    return(
        <>
            <Title>
                Ingredients
            </Title>
            <Wrapper>
                {data.sort((a, b) => b.percent_max - a.percent_max).slice(0, Math.min(data.length, 15)).filter(i => !i.id.includes("%") && (Number(i.percent_max) > 0.02)).map((item, index) =>
                    <Item
                        key={item.id}
                        size={item.percent_max}
                        onClick={() => window.open("https://wikipedia.org/wiki/" + item.id.replace("en:", ""))}
                    >{item.id.replace("en:", "")}</Item>
                )}
            </Wrapper>
        </>
    )
}

export default IngredientTags