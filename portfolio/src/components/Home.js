import React from "react";
import Nav from "./Nav";
import styled from "styled-components";
import Face from "./images/face2.png";


const Name = styled.p`
    display: inline;
    font-weight: bold;
    background: linear-gradient(to right, ${props => props.theme.accentColor}, ${props => props.theme.accentColor2});
    // magic bits that make the background of the text transparent
    -webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`


const Intro = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
    top: 5rem;
`
const Img = styled.img`
    max-width: 250px;
    max-height: 250px;
    border: 2px solid grey;
    border-radius: 50%;
    margin: 2%;
`
const H1 = styled.h1`
    font-size: 3em;
`
const SubIntro = styled.div`
    flex: column;
    text-align: center;
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
    margin: 0 auto;
    border-radius: 10px;
`

function Home () {
    return(
        <>
            <Nav />
            <Intro>
                <Img src={Face}/>
                <SubIntro>
                    <H1>Hi I'm <Name>Becca</Name>.</H1>
                    <h3>I'm a full-stack web developer based out of Colorado. </h3>
                    <PortfolioBtn href="/portfolio">View my portfolio</PortfolioBtn>
                </SubIntro>
            </Intro>
            
        </>
    )
}

export default Home;