import React from "react";
import styled from "styled-components";

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
    font: bold 120 Poppins, sans-serif;
    
`
function Nav () {
    return (
        <>
            <StyledUl>
                <StyledLi>
                    <Name href="/">Becca</Name>
                </StyledLi>
                <StyledLi>
                    <StyledLink href="/">Home</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink href="/">Portfolio</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink href="/">Contact</StyledLink>
                </StyledLi>
            </StyledUl>
        </>
    )
}
export default Nav;