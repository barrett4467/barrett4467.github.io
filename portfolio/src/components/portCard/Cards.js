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
    border-radius: 10px;
`
const Banner = styled.div`
    text-align: center;
    width: 100%;
    background: linear-gradient(to right, ${props => props.theme.accentColor}, ${props => props.theme.accentColor2});
`
const Photo = styled.img`
    width: 100%;
    max-height: 50vh;
`
const BackOfCard = styled.div`
    width: 150px;
    padding: 2%;
    border-radius: 10px;
    background: linear-gradient(to right, ${props => props.theme.accentColor}, ${props => props.theme.accentColor2});
`
const LinkBtn = styled.a`
    text-decoration: none;
    color: ${props => props.theme.mainColor};
    &:hover{
        color: ${props => props.theme.accentColor2};
    }
    background-color: rgba(147, 54, 56, 0.9);
    width: 30px;
    padding: 2%;
    margin: 0 auto;
    border-radius: 10px;
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
                <BackOfCard>
                    <div onClick={this.handleClick}>
                        <p>
                            {this.props.project.description}
                        </p>
                    </div>
                    <LinkBtn href={this.props.project.code}target="_blank">Code</LinkBtn>
                    <LinkBtn href={this.props.project.link}target="_blank">Project</LinkBtn>
                </BackOfCard>
            </ReactCardFlip>
        )
    }
}

export default Card;