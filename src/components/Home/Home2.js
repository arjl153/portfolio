import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am a computer science enthusiast with a passion for solving real-world problems through cutting-edge technologies.
            <br/>
            <br/>
            With hands-on experience at Infibeam Avenues and a solid academic background, 
            I've had the fantastic chance to dive headfirst into the wild world of software engineering.
            <br/>
            <br/>
            My journey has encompassed a diverse spectrum of responsibilities, 
            from creating secure <b className="purple">Django and React</b> based systems
            to fine-tuning the performance of <b className="purple">Large Language Models (LLMs)</b> through seamless integration with
            <b className="purple"> Knowledge Graphs</b>.
            <br />
            <br />
            I'm well-versed in a range of <b className="purple">programming languages, databases, web technologies, and cloud computing platforms</b>, 
            making me a versatile tech enthusiast ready to tackle exciting challenges!
              <br />
              <br />
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/arjl153"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/aditya.ramachandra.5/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aditya-rjl/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/aditya_rjl/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
