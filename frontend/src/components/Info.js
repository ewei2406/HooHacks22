import { ContentWrapper, Title, Subtitle } from "./ContentWrapper";
import styled from "styled-components";

const Smalltext = styled(ContentWrapper)`
    font-size: 0.75em;
    font-style: italic;
    display: block;
`

const B = styled.span`
    font-weight: 800;
`

const Info = () => {
    return (
        <>
            <Smalltext>
                <Title>INFO</Title>
                <div><B>Ecoscore</B>: derived from total energy emissions, packaging materials, and other data from Open Food Facts.</div>
                <div><B>Nutrition Score</B>: Nutriscore as defined by <a href="https://simapro.com/products/agribalyse-agricultural-database/">Agribalyse</a>.</div>
                <div><B>Health Score</B>: calculated from the <a href="https://world.openfoodfacts.org/nova">NOVA group</a> (defining how processed a food is).</div>
                <div>Other data is collected from the <a href="https://world.openfoodfacts.org/">Open Food Facts database</a>.</div>
            </Smalltext>
            <Smalltext>
                <Title>DISCLAIMER</Title>
                We are neither doctors, nor medical professionals. Our project does not attempt to give comprehensive dietary or nutritional information, and we recommend that you talk to a doctor before changing your diet.
            </Smalltext>
        </>
    )
}

export default Info