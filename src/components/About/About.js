import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col md={8} className="home-about-description">
        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong>About Me</strong>
            </h1>
            <p style={{ fontSize: "1.5em", paddingBottom: "20px" }}>
            I am Towhidul, web tech enthusiast & undergrad student from Bangladesh.
            I learnt about algorithms, data structures, object oriented programming & design patterns during my undergrad. 
            Developed various projects where I've used frameworks like reactJS & laravel, relational and non relational databases. 
            

            </p>
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong>Education</strong>
            </h1>
            <Aboutcard />
          </Col>
          {/* <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col> */}
        </Row>
        <h1 className="project-heading">
           <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        {/* <h1 className="project-heading">
          <strong className="purple">Tools</strong>
        </h1>
        <Toolstack /> */}

        <Github />
      </Container>
    </Container>
  );
}

export default About;
