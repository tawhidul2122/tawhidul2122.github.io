import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/towhidul_islam.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  return (
    <div>
    <div>
        <ul> <li>  {"\n"} {"\n"} </li> </ul>
       </div>
    <div > 
      <div> <ul> <li>  {"\n"} {"\n"} </li> </ul> </div>
       <iframe title="resume" src="https://drive.google.com/file/d/1fiMXHY9pRLE_iFu_A1Cgp9FJXUrUGbQk/preview" width="800" height="500" allow="autoplay"></iframe>
       </div>
       <div>
       <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button> 
        </Row> 
        </Container> 
    </div>
    </div>
  );
}

export default ResumeNew;
