import React from "react"
import Tags from "./Tags"
import styled from "styled-components"
import IngredientTags from "./IngredientTags"
import Scale from "./Scale"
import { FaLeaf } from "react-icons/fa"
import { GiHealthNormal, GiOpenPalm } from "react-icons/gi"


const ResultsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    box-sizing: border-box;
    width: 100%;
    border-radius:10px;
    background-color: ${p => p.theme.complementColor};
`

const Title = styled.div`
    font-size: 1.5em;
    margin-bottom: 5px;
    text-align: center;
    font-family: ${p => p.theme.headingFont};
    font-weight: 800;
    color: ${p => p.theme.accentColor};
`

const Subtitle = styled.div`
    font-size: 0.75em;
    text-align: center;
    font-family: ${p => p.theme.headingFont};
    font-weight: 800;
`

const ScaleWrapper = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    margin: 5px 0;
`

const Results = ({ results }) => {
    console.log(results)

    if (results) {
        return (<ResultsWrapper>

            <Subtitle>{results.brands} - {results.brand_owner}</Subtitle>
            <Title>{results.product_name.split(", ")[0]}</Title>

            <ScaleWrapper>
                <Scale value={20} name="EcoScore" icon={<FaLeaf />} />
                <Scale value={60} name="HealthScore" icon={<GiHealthNormal />} />
                <Scale value={80} name="EthicsScore" icon={<GiOpenPalm />} />
            </ScaleWrapper>

            <Tags name="Food Groups"
                data={results.food_groups
                    .replace("en:", "")
                    .split(", ")} />

            <Tags name="Allergens" 
                data={results.allergens_from_ingredients
                .replace("en:", "")
                .split(", ")}/>

            <Title>Top ingredients</Title>

            <IngredientTags data={results.ingredients} />

            </ResultsWrapper>)
    } 
    return (<ResultsWrapper>No data found</ResultsWrapper>)
}

export default Results