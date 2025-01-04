import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/mypro.jpg";
import pro1 from "../../Assets/Projects/pro1.jpg";
import pro2 from "../../Assets/Projects/pro2.jpg";
import pro3 from "../../Assets/Projects/pro3.jpg";

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
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="By combining React, Node.js, and JavaScript, you can build a scalable, responsive tour management Website that enhances user experience and streamlines tour management."
              ghLink="https://github.com/dheenadha/Capstone-Project-FE"
              demoLink="https://capable-palmier-4f3501.netlify.app/"
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
              title="Chatify"
              description="In a React app, a dummy cart might involve using the useState or useReducer hooks to manage the cart items and total, while a Node.js backend could mock API endpoints for adding/removing items, but all the data would be fake for the sake of the demo."
              ghLink="https://github.com/dheenadha/day28task"
              demoLink="https://iridescent-rabanadas-b49b36.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro1}
              isBlog={false}
              title="Chatify"
              description="This Guvi demo learning project is an engaging and interactive tool for both beginner and intermediate learners. It uses React for a responsive frontend and could also include a range of modern web development techniques and tools to make the learning experience enjoyable and motivating."
              ghLink="https://github.com/dheenadha/day26-task"
              demoLink="https://chimerical-mooncake-fad922.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro3}
              isBlog={false}
              title="Chatify"
              description="An English Dictionary project is an excellent way to build and showcase web development skills. It offers users a valuable resource for improving their language skills while incorporating features like history, favorites, and gamification to enhance the user experience. This project is highly customizable and can scale to include more advanced features like user accounts and multi-language support."
              ghLink="https://github.com/dheenadha/daay20-task-2"
              demoLink="https://admirable-sundae-da9674.netlify.app/"
            />
          </Col>
          </Row>
      </Container>
    </Container>
  );
}

export default Projects;
