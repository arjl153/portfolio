import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Card from "./Card";
import Particle from "../Particle";
import IULogo from "../../Assets/iu.png";
import PESLogo from "../../Assets/pesu.png";
import infi from "../../Assets/infibeam.png";

const imageStyle = {
    height: 'auto',
    width: '200px',
  };

const Education = () => {
  return (
    <Container fluid className="about-section">
      <Particle />

      <Container>
        <h1 
            style={{ fontSize: "52px", fontWeight: "bold", textAlign: "center" }}>
            Work Experience
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Card
              imgPath={infi}
              isBlog={false}
              title="Software Developer"
              description="I was part of the registration team where I was invloved in design, 
              development and deployment of several features related to the e-commerce platform.
              I was part of the registration team till the end where I handled 'My Account' section and Registration of
              Buyers and Sellers and was involved in several projects like Virtual Bank Account Creation and Logistics Service."
            />
          </Col>

          <Col md={4} className="project-card">
            <Card
              imgPath={infi}
              isBlog={false}
              title="Software Intern"
              description="Refined product searches across over 150 categories through the utilization of a custom entity extraction model, 
              which leveraged OpenNLP-based tokenization and featurization techniques. Additionally, I also worked on real-time indexing by 
              seamlessly integrating our system with Apache Solr, enhancing our ability to provide optimized search capabilities."
            />
          </Col>
        </Row>
    </Container>

      <Container style={{ paddingTop: "150px", paddingBottom: "50px" }}>
        <h1 
            style={{ fontSize: "52px", fontWeight: "bold", textAlign: "center" }}>
            Education
        </h1>
        <Row style={{ paddingTop: "50px" }}>
            <Col
            md={2}
            style={{ addingBottom: "50px" }}
            className="about-img"
          >
            <img src={IULogo} alt="IU" className="img-fluid" style={imageStyle}/>
          </Col>
          <Col
            md={9}
            style={{
              paddingBottom: "50px",
              textAlign: "left",
            }}
          >
            <h2>Indiana University Bloomington</h2>
            <h4>MS in Computer Science</h4>
            <h5 style={{ color: '#D3CAD4'}}>Aug 2022 - Present</h5>
            <ul style={{ textAlign: 'justify', textJustify: 'inter-word' , color: '#D3CAD4'}}>
                <li>GPA: 3.95</li>
                <li>Currently working as an Associate Instructor for the Data Mining course.</li>
                <li>Relevant Coursework: Software Engineering, Applied Database Technologies, 
                    Social Media Informatics, Data Mining, Applied Algorithms
                    Knowledge Graphs and LLMs, Deep Learning, Computer Networks, Security for Networked Systems</li>
            </ul>
          </Col>
          
        </Row>

        <Row style={{ paddingTop: "20px" }}>
            <Col
            md={2}
            style={{ addingBottom: "50px" }}
            className="about-img"
          >
            <img src={PESLogo} alt="PES" className="img-fluid" style={imageStyle}/>
          </Col>
          <Col
            md={9}
            style={{
            //   paddingTop: "30px",
              paddingBottom: "50px",
              textAlign: "left",
            }}
          >
            <h2>PES University</h2>
            <h4>B.Tech in Computer Science</h4>
            <h5 style={{ color: '#D3CAD4'}}>Aug 2016 - Nov 2020</h5>
            <ul style={{ textAlign: 'justify', textJustify: 'inter-word', color: '#D3CAD4'}}>
                <li>GPA: 3.72</li>
                <li>Relevant Coursework: Data Structures, Algorithms, 
                    Operating Systems, Computer Networks, Compiler Design,
                    Theory of Computing, Software Engineering, Database Technologies,
                    Machine Learning, Data Analytics, Cloud Computing, Big Data
                    </li>
            </ul>
          </Col>
          
        </Row>
    </Container>
    
    </Container>
  );
};

export default Education;