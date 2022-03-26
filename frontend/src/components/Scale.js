import styled from "styled-components"

const Wrapper = styled.div`
    width: 100px;
    height: 50px;
    z-index: 2;
    position: relative;
    overflow: hidden;
    filter: drop-shadow(0 2px 4px #ccc);
    margin-bottom: 20px;

    &:after {
        z-index: -1;
        content: "";
        width: 100%;
        height: 200%;
        top: 0;
        left: 0;
        position: absolute;
        background: conic-gradient(yellow, green, green, red, yellow);
        border-radius: 100%;
    }
`

const Wrapper2 = styled.div`
    position: relative;
`

const Pointer = styled.div`
    width: 5px;
    height: 100px;
    background-color: white;
    position: absolute;
    bottom: -50px;
    left: 47.5px;


    transform: ${p => "rotate(" + p.amt + "deg)"};
`

const Name = styled.div`
    font-family: ${p => p.theme.bodyFont};
    left: 0;
    right: 0;
    text-align: center;
    top: 55px;

    position: absolute;
`

const Scale = ({ value, name }) => {

    function scale(number, inMin, inMax, outMin, outMax) {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }

    console.log(value)
    console.log(scale(value, 0, 1, -70, 70))

    return (
        <Wrapper2>
            <Wrapper>
                <Pointer amt={scale(value, 0, 1, -70, 70)}></Pointer>
            </Wrapper>
            <Name>{name}</Name>
        </Wrapper2>
    )
}

export default Scale