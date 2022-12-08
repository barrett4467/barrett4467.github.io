import React from "react";
import Nav from "./Nav";
import styled from "styled-components";


const Name = styled.p`
    display: inline;
    font-weight: bold;
    background: linear-gradient(to right, ${props => props.theme.accentColor}, ${props => props.theme.accentColor2});
    // magic bits that make the background of the text transparent
    -webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

`
const PortfolioBtn = styled.a`
    text-decoration: none;
    color: ${props => props.theme.mainColor};
    &:hover{
        color: ${props => props.theme.accentColor2};
    }
    background-color: #bc4749;
    width: 30px;
    padding: 2%;
    border-radius: 10px;
`

function Home () {
    return(
        <>
            <Nav />
            <h1>Hi I'm <Name>Becca</Name>.</h1>
            <h3>I'm a full-stack web developer based out of Colorado. </h3>
            <PortfolioBtn href="/portfolio">View my portfolio</PortfolioBtn>
        </>
    )
}

export default Home;