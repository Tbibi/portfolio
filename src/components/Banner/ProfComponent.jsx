import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { GiEarthAmerica } from "react-icons/gi";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const ProfComponent = () => {
  const downloadCV = () => {
    // Specify the URL of the CV PDF file
    const fileUrl = "./CV_2024-08-02_Ahmed_Tbibi.pdf"; // Update this path with the actual URL or path

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Ahmed_Tbibi.pdf"; // The name of the file when downloaded

    // Append link to the body
    document.body.appendChild(link);

    // Trigger the download by simulating a click
    link.click();

    // Remove the link from the body
    document.body.removeChild(link);
  };
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Salut <span className="green">je suis</span>
          </h4>
          <h1 className="green">TBIBI Ahmed</h1>
          <h3>Ingénieur en Informatique et Réseaux</h3>
          <p>
          spécialisé dans le développement de solutions logicielles. 
          Passionné par les technologies innovantes, j'ai conçu et développé des projets variés,
           tels que l'application MobileFleets pour Renault Maroc. 
           Explorez mon travail pour découvrir comment je peux contribuer à vos projets technologiques avec expertise et créativité.
          </p>
          <button onClick={downloadCV}>Download CV</button>
          <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a onClick href="https://github.com/Tbibi">
                  <FaGithub/>
                </a>
              </span>
              <span>
                <a href="/">
                  <GiEarthAmerica />
                </a>
              </span>
              <span>
                <a onClick href="https://linkedin.com/in/ahmed-tbibi-791751198">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img
            src="/Untitled design (1).png"
            alt="profile"
          />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
