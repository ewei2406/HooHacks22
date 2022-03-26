import React from "react"
import Tags from "./Tags"
import styled from "styled-components"
import IngredientTags from "./IngredientTags"
import Scale from "./Scale"


const ResultsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 10px 20px;
    box-sizing: border-box;
    width: 100%; 
    height:700px;
    border-radius:10px;
    background-color: ${p => p.theme.complementColor};
`

const Title = styled.div`
    font-size: 1.5em;
    text-align: center;
    font-family: ${p => p.theme.headingFont};
    color: ${p => p.theme.accentColor};
`

const Subtitle = styled.div`
    font-size: 0.75em;
    text-align: center;
    font-family: ${p => p.theme.headingFont};
`

const ScaleWrapper = styled.div`
    display: flex;
    gap: 50px;
    justify-content: center;
`

const Results = ({ results }) => {
    console.log(results)

    if (results) {
        return (<ResultsWrapper>

            <Title>{results.data.product.product_name.split(", ")[0]}</Title>
            <Subtitle>{results.data.product.brands} - {results.data.product.brand_owner}</Subtitle>

            <Tags name="Food Groups"
                data={results.data.product.food_groups
                    .replace("en:", "")
                    .split(", ")} />

            <Tags name="Allergens" 
                data={results.data.product.allergens_from_ingredients
                .replace("en:", "")
                .split(", ")}/>

            <IngredientTags data={results.data.product.ingredients}/>

            <ScaleWrapper>
                <Scale value={0.2} name={"a"}/>
                <Scale value={0}/>
                <Scale value={0} />
            </ScaleWrapper>

            </ResultsWrapper>)
    } 
    return (<ResultsWrapper>No data found</ResultsWrapper>)
}

export default Results