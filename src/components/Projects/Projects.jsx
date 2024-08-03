import React from 'react'
import styled from 'styled-components';
import SliderComp from './Slider';
import { Zoom } from 'react-awesome-reveal';

const Projects = () => {
  return (
    <Container id='project'>
        <Zoom>
            <h1>Projets <span className="green">récents</span></h1>
            <p>Dans mes projets récents, j'ai contribué à diverses initiatives, notamment la création d'une plateforme e-commerce conviviale, le développement d'une application mobile dédiée à la santé, et la mise en place d'un système de gestion de contenu pour une association à but non lucratif. Ces expériences ont enrichi mes compétences et ma capacité à travailler efficacement en équipe.</p>
        </Zoom>
        <Slide>
            <SliderComp/>
        </Slide>
    </Container>
  )
}

export default Projects;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;
    position: relative;
    @media(max-width: 840px){
        width: 90%;
    }
    h1{
        font-size: 1.9rem;
    }

    p{
        width: 28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 0.9rem;
        @media(max-width : 500px){
            width: 90%;
        }
    }
    
`

const Slide = styled.div``