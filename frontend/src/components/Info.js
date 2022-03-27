import { ContentWrapper, Title, Subtitle } from "./ContentWrapper";
import styled from "styled-components";

const Smalltext = styled(ContentWrapper)`
    font-size: 0.75em;
    font-style: italic;
`

const Info = () => {
    return (
        <Smalltext>
            <Title>INFO</Title>
            Disclaimer: We are neither doctors, nor medical professionals. Our project does not attempt to give comprehensive dietary or nutritional information, and we recommend that you talk to a doctor before changing your diet. Nutrition information is collected from Open Food Facts.
        </Smalltext>
    )
}

export default Info