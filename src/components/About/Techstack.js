import React from 'react';
import { Col, Row } from "react-bootstrap";


import cimg from "../../Assets/programs/c.png";
import cpp from "../../Assets/programs/cpp.png";
import rimg from "../../Assets/programs/r.png";
import java from "../../Assets/programs/java.png";
import py from "../../Assets/programs/py.png";
import scala from "../../Assets/programs/scala.png";
import spark from "../../Assets/programs/spark.png";

import angular from "../../Assets/programs/angular.png";
import reac from "../../Assets/programs/react.png";
import ruby from "../../Assets/programs/ruby.png";
import django from "../../Assets/programs/django.png";
import flask from "../../Assets/programs/flask.png";

import mysql from "../../Assets/programs/mysql.png";
import postgresql from "../../Assets/programs/postgresql.png";
import mongodb from "../../Assets/programs/mongodb.png";
import neo4j from "../../Assets/programs/neo4j.png";
import cassandra from "../../Assets/programs/cassandra.png";

import docker from "../../Assets/programs/docker.png";
import aws from "../../Assets/programs/aws.png";
import gcp from "../../Assets/programs/gcp.png";
import azure from "../../Assets/programs/azure.png";
import kubernetes from "../../Assets/programs/kubernetes.png";

import llm from "../../Assets/programs/llm.png";
import openai from "../../Assets/programs/openai.png";
import pinecone from "../../Assets/programs/pinecone.png";
import kg from "../../Assets/programs/kg.png";

function TechnologyList() {
  const imageStyle = {
    width: '60%',
  };

  return (
    <div>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <img src={py} alt="Python" style={imageStyle} />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={java} alt="Java" style={imageStyle} />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={cimg} alt="C" style={imageStyle} />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={cpp} alt="C++" style={imageStyle} />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={rimg} alt="R" style={imageStyle} />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={scala} alt="Scala" style={{ width: '85%' }}/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={spark} alt="Spark" style={{ width: '95%' }} />
        </Col>
      </Row>

    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={angular} alt="Angular" style={{ width: '80%' }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={reac} alt="React" style={{ width: '80%' }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ruby} alt="Ruby" style={{ width: '80%' }}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={django} alt="Django" style={{ width: '65%' }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={flask} alt="Flask" style={{ width: '65%' }} />
      </Col>
    </Row>

    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={mysql} alt="Mysql" style={imageStyle} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={postgresql} alt="Postgresql" style={imageStyle} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={mongodb} alt="Mongodb" style={{ width: '100%' }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={neo4j} alt="Neo4j" style={{ width: '100%' }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={cassandra} alt="Cassandra" style={{ width: '100%' }} />
      </Col>
    </Row> 

    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={docker} alt="docker" style={{ width: '75%' }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={aws} alt="aws" style={{ width: '75%' }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={gcp} alt="gcp" style={{ width: '80%' }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={azure} alt="azure" style={{ width: '100%' }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={kubernetes} alt="kubernetes" style={{ width: '80%' }} />
      </Col>
    </Row>

    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={llm} alt="LLM" style={{ width: '100%' }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={openai} alt="OpenAI" style={{ width: '75%' }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={pinecone} alt="PineconeDB" style={{ width: '100%' }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={kg} alt="Knowledge Graph" style={{ width: '100%' }} />
      </Col>
    </Row>

    </div>
  );
}

export default TechnologyList;

