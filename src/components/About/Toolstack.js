import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
} from "react-icons/si";
import {IoLogoWindows} from "react-icons/io";
import { VscTerminalCmd } from "react-icons/vsc";
import { SiMacos } from "react-icons/si";
import { FaChrome } from "react-icons/fa";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <IoLogoWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <VscTerminalCmd />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaChrome />
      </Col>
    </Row>
  );
}

export default Toolstack;
