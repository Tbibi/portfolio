import React from "react";

import { FaLaptopCode, FaMobileAlt, FaDesktop } from 'react-icons/fa';
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          Mes <span className="green">services</span>
        </h4>
        <h1>Ce que je Propose</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={FaLaptopCode}
            title={"Développeur Full Stack"}
            disc={`En tant que développeur full stack, je conçois et implémente des applications web complètes et performantes. J'utilise des technologies modernes telles que ReactJS pour le front-end et Springboot pour le back-end, associées à des bases de données robustes comme MySQL. Mon objectif est de fournir des solutions personnalisées qui répondent exactement aux besoins de mes clients, garantissant ainsi une expérience utilisateur fluide et efficace.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FaMobileAlt}
            title={"Développeur Mobile"}
            disc={`Spécialisé dans le développement mobile, je crée des applications intuitives et réactives pour les plateformes Android et multiplateformes. Grâce à des technologies comme Java, React Native et Dart, je m'assure que chaque application offre une performance optimale et une expérience utilisateur exceptionnelle. Mon approche se concentre sur la satisfaction des utilisateurs finaux tout en respectant les meilleures pratiques de développement.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={FaDesktop}
            title={"Ingénieur Logiciel"}
            disc={`En tant qu'ingénieur logiciel, j'offre des services complets de conception et d'implémentation de solutions logicielles sur mesure. J'utilise des technologies avancées comme Node.js et ExpressJS pour le développement côté serveur, et des bases de données comme MySQL et MongoDB pour une gestion efficace des données. Mon travail vise à créer des logiciels fiables et évolutifs qui soutiennent les objectifs commerciaux de mes clients tout en assurant la qualité et la sécurité.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
