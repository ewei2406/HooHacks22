import React from "react"
import Tags from "./Tags"
import styled from "styled-components"
import IngredientTags from "./IngredientTags"
import Scale from "./Scale"
import { FaLeaf, FaCarrot } from "react-icons/fa"
import { GiHealthNormal } from "react-icons/gi"
import { ContentWrapper, Subtitle, Title } from "../ContentWrapper"

const ScaleWrapper = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    margin: 5px 0;
`

const Results = ({ results }) => {
    console.log(results)

    if (results) {
        return (<ContentWrapper>

            <Tags
                data={[`UPC: ${results.code}`]} />

            <Subtitle>{results.brands} - {results.brand_owner}</Subtitle>
            <Title>{results.product_name.split(", ")[0]}</Title>

            <ScaleWrapper>
                <Scale value={results.carbonFootprint} suffix={"kg"} name="Carbon Footprint" noColor />
                <Scale value={results.ecoscore} name="Eco Score" icon={<FaLeaf />} />
                <Scale value={results.nutriscore === -999 ? -999 : Math.round(72.5 - (100 / 55) * results.nutriscore)} name="Nutrition Score" icon={<FaCarrot/>}/>
                <Scale value={results.novagroup === -999 ? -999 : 100 - results.novagroup * 20} name="Health Score" icon={<GiHealthNormal />} />
            </ScaleWrapper>

            <Tags name="Food Groups"
                data={results.food_groups
                    .replace("en:", "")
                    .replace("-", " ")
                    .split(", ")} />

            <Tags name="Allergens" 
                data={results.allergens_from_ingredients
                .replace("en:", "")
                .split(", ")}/>

            <Title>Top ingredients</Title>

            <IngredientTags data={results.ingredients} />

            </ContentWrapper>)
    } 
    return (<ContentWrapper>No data</ContentWrapper>)
}

export default Results