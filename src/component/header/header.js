import React from "react";
import styled from "styled-components";

const Main = styled.div`
    color : red;
    background-color : black;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
`;


function Header (){
    return (
        <>
            <Main>
                <Title>Extraordinary NetFlex Film and Serial</Title>
            </Main>
        </>
    )
}

export default Header;