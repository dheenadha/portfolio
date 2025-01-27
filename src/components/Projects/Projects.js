import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/mypro.jpg";
import pro1 from "../../Assets/Projects/pro1.jpg";
import pro2 from "../../Assets/Projects/pro2.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recant <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Main Project in full stack
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro1}
              isBlog={false}
              title="Library Management system"
              description="The LMS is a web application designed to streamline the management of library books, user accounts, book borrowing and returns, and user reviews."
              ghLink="https://github.com/dheenadha/projectfentend"
              demoLink="https://grand-concha-453fbc.netlify.app/"
            />
          </Col>
        
       
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <p style={{ color: "white" }}>
          Here are a few projects in Work.
        </p>
         
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro2}
              isBlog={false}
              title="DD Electronics"
              description="The Electronics is a ecommerce web application, we can login, register and add to the cart and proceed with checkout with paypal integration."
              ghLink="https://github.com/dheenadha/ele-project-FE"
              demoLink="https://ddele.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Tour Plan"
              description="By combining React, Node.js, and JavaScript, you can build a scalable, responsive tour management Website that enhances user experience and streamlines tour management."
              ghLink="https://github.com/dheenadha/Capstone-Project-FE"
              demoLink="https://capable-palmier-4f3501.netlify.app/"
            />
          </Col>
         
          </Row>
      </Container>
    </Container>
  );
}

export default Projects;
