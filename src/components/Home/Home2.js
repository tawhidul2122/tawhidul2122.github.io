import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">


            <li className="social-icons">
                <a 
                href="mailto:tawhidul2122@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons">
                  <AiFillMail />
                  
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/tawhidul2122"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
               <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tawhidul2122/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>     
              <li className="social-icons">
                <a
                  href="https://twitter.com/tawhidul2122"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
