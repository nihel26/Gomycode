import React from "react";
import Image from "./Image";
import MyPhoto from "./imageinsrc.jpg";
import { Col, Container, Row } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
const Profil = (props) => {
  console.log(`props:`, props.name, props.bio, props.profesion);
  //props.name = "Nihel"; // try to change the value into 'John'
  return (
    <Container
      style={{
        backgroundColor: "#00004d",
        borderRadius: "5px",
        color: "white",
      }}
    >
      <Row>
        <Col style={{margin:"20px"}}>
          <img src={MyPhoto} alt="My profile photo" />
        </Col>
      </Row>
      <Row>
        <Col>
          <span style={{ fontWeight: "bold" }}>FullName: </span>
          {props.name}
        </Col>
        <Col xs={6}>
          <span style={{ fontWeight: "bold" }}>Bio: </span>
          {props.bio}
        </Col>
        <Col>
          <span style={{ fontWeight: "bold" }}>profesion: </span>
          {props.profesion}
        </Col>
      </Row>
      <Row>
        <Col>
          <button
            onClick={() => props.(`my name is nihel`)}
          >
            show me your name
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default Profil;
