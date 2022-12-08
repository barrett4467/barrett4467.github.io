import React from "react";
import Nav from "./Nav";
import Card from "./portCard/Cards";
import { projects } from "./portCard/projects";
import styled from "styled-components";

function Portfolio() {

    const Container = styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 5%;
    `
    return(
        
        <>
            <Nav />
            <Container>
                {projects.map(project => (
                    <Card key= {project.name} project={project} />
                ))}

            </Container>
        </>
    )
}

export default Portfolio;