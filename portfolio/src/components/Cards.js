import React from "react";
import ReactCardFlip from "react-card-flip";
import styled from "styled-components";

// import FrontOfCard from "./FrontOfCard";
// import BackOfCard from "./BackOfCard";

const FrontOfCard = styled.div`
    max-width: 150px;
    max-height: 150px;
    background: linear-gradient(to right, ${props => props.theme.accentColor}, ${props => props.theme.accentColor2});
`
const BackOfCard = styled.div`
    max-width: 150px;
    max-height: 150px;
    background: linear-gradient(to right, ${props => props.theme.accentColor}, ${props => props.theme.accentColor2});
`
class Card extends React.Component {
    constructor(){
        super();
        this.state = { 
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        this.setState(prevState => ({
            isFlipped: !prevState.isFlipped
        }))
    }
    render(){
        return(
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                <FrontOfCard>
                    This is the front of the ReactCardFlip
                    <button onClick={this.handleClick}>Click to flip</button>
                </FrontOfCard>
                <BackOfCard>
                    This is the back of the card
                    <button onClick={this.handleClick}>Click to flip</button>
                </BackOfCard>
            </ReactCardFlip>
        )
    }
}

export default Card;