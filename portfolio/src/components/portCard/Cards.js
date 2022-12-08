import React from "react";
import ReactCardFlip from "react-card-flip";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";

const bounceAnimation = keyframes`${bounce}`;
const FrontOfCard = styled.div`
    padding: 2%;
    margin: 1%;
    width: 100%;
    background: linear-gradient(to right, ${props => props.theme.accentColor}, ${props => props.theme.accentColor2});
    &:hover{
        animation: 1s ${bounceAnimation};
    };
`
const Banner = styled.div`
    text-align: center;
    width: 100%;
    background: linear-gradient(to right, ${props => props.theme.accentColor}, ${props => props.theme.accentColor2});
`
const Photo = styled.img`
    width: 150px;
    height: 150px;
`
const BackOfCard = styled.div`
    width: 150px;
    padding: 2%;
    // height: 150px;
    background: linear-gradient(to right, ${props => props.theme.accentColor}, ${props => props.theme.accentColor2});
    &:hover{
        animation: 1s ${bounceAnimation};
    };
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
        setTimeout(()=>{
            this.setState(prevState => ({
                isFlipped: !prevState.isFlipped
            }))

        }, 500);
    }
    render(){
        return(
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                <FrontOfCard onClick={this.handleClick}>
                    <Banner>
                        <p>{this.props.project.name}</p>
                        <p>{this.props.project.type}</p>
                    </Banner>
                    <Photo src={this.props.project.photo} alt={this.props.project.name}/>
                </FrontOfCard>
                <BackOfCard onClick={this.handleClick}>
                    <div>
                        {this.props.project.description}
                    </div>
                </BackOfCard>
            </ReactCardFlip>
        )
    }
}

export default Card;