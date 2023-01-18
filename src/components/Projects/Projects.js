import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import food from "../../Assets/Projects/food.PNG";
import weather from "../../Assets/Projects/weather.PNG";
import cloth from "../../Assets/Projects/cloth.PNG";
import hotel from "../../Assets/Projects/hotel.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
           Recent <strong className="purple">Projects </strong>
        </h1>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="WeatherPreview"
              description="ReactJS application to show real time weather data across the globe."
              ghLink="https://github.com/tawhidul2122/Weather-App-React"
              demoLink="https://weather-app-react-tawhidul2122.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Food Delivery System"
              description="Food Delivery System using Laravel"
              ghLink="https://github.com/tawhidul2122/Project_Level3_Term2"
              
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloth}
              isBlog={false}
              title="Shopping Cart"
              description="Shopping Cart using Javascript & Local Storage"
              ghLink="https://github.com/tawhidul2122/shopping-cart"
              demoLink="https://tawhidul2122.github.io/shopping-cart/"              
            />
          </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={hotel}
//               isBlog={false}
//               title="Hotel Booking System"
//               description="MERN stack hotel booking App"
//               ghLink="https://github.com/tawhidul2122/Hotel-Booking"
//               demoLink="https://github.com/tawhidul2122/Hotel-Booking"
//             />
//           </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
