import React from "react";
import styled from "styled-components";

const Navbar = styled.div`
 
`
const StyledUl = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    margin: 0 auto;
    padding: 2%;
`
const StyledLi = styled.li`
    float: left;
`

const StyledLink = styled.a`
    text-decoration: none;
    font-size: 2em;
    color: ${props => props.theme.mainColor};
    &:hover {
        color: ${props => props.theme.accentColor};
    }
`
const Name = styled(StyledLink)`
    font-size: 2em;
    font-weight: bold;
    background: linear-gradient(to right, ${props => props.theme.accentColor}, ${props => props.theme.accentColor2});
    // magic bits that make the background of the text transparent
    -webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

`

function Nav () {
    return (
        <Navbar>
            <StyledUl>
                <StyledLi>
                    <Name href="/">Becca Brisby</Name>
                </StyledLi>
                <StyledLi>
                    <StyledLink href="/">Home</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink href="/portfolio">Portfolio</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink href="/about">About</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink href="/contact">Contact</StyledLink>
                </StyledLi>
            </StyledUl>
        </Navbar>
    )
}
export default Nav;