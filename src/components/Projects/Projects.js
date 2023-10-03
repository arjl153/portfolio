import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dkv from "../../Assets/Projects/dkv.png";
import da from "../../Assets/Projects/da.png";
import nlp from "../../Assets/Projects/nlp.png";
import sum from "../../Assets/Projects/sum.png";
import recsys from "../../Assets/Projects/recsys.png";
import acpl from "../../Assets/Projects/acpl.png";
import llm from "../../Assets/Projects/llm.png";
import tour from "../../Assets/Projects/tour.png";
import cc from "../../Assets/Projects/cc.png";
import cv from "../../Assets/Projects/cv.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dkv}
              isBlog={false}
              title="Distributed Key-Value Store"
              description="Developed a robust distributed key-value store with master-slave architecture across multiple servers to demonstrate fault tolerance and 
              high availability using replication and zookeeper integrations."
              ghLink="https://github.com/arjl153/Distributed-Key-Value-store"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={da}
              isBlog={false}
              title="Customer Churn Prediction"
              description="Predicted customer churn using Logistic Regression and emulated results with 98% MER and 0.074 log loss error. 
              Also performed hypothesis testing and visual analysis of users’ behaviour on the dataset."
              ghLink="https://github.com/arjl153/WSDM---KKBox-s-Churn-Prediction-Challenge"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nlp}
              isBlog={false}
              title="Essay Grading with NLP"
              description="Compared and contrasted the performances of SVR and LSTM models using Cohen’s Kappa coefficient to grade essays."
              ghLink="https://github.com/arjl153/Automated-essay-grading"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sum}
              isBlog={false}
              title="Food Review Summarizer"
              description="Engineered an efficient Seq2Seq model with bidirectional LSTM, GloVe embeddings, and attention for automatic food review summarization."
              ghLink="https://github.com/arjl153/text-summarization"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recsys}
              isBlog={false}
              title="Reinforcement Learning based Movie Recommendations"
              description="Developed a cutting-edge Deep Q-Network-based recommender system, outperforming traditional methods with a 68% precision rate (threshold user rating: 3.2)"
              ghLink="https://github.com/arjl153/rc19"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={acpl}
              isBlog={false}
              title="Academic Coursework Planner"
              description="Engineered an interactive academic info system in Python leveraging OpenAI GPT3 and Pinecone DB, and deployed on Microsoft Azure."
              ghLink="https://github.com/arjl153/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={llm}
              isBlog={false}
              title="Knowledge Graph Integration for Enhanced LLM Reasoning (ongoing)"
              description="Enhancing Large Language Models (LLMs) by integrating knowledge graphs, processing triplets to construct a graph database, and optimizing LLM performance through graph-based queries."
              ghLink="https://github.com/arjl153/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tour}
              isBlog={false}
              title="Tour Management System"
              description="Developed and deployed a secure tour management system using Django and React, allowing users to book flights, hotels, and customize travel itineraries with
               preferred destinations, including social media registration and JWT authentication."
              ghLink="https://github.com/arjl153/tour-management"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cc}
              isBlog={false}
              title="Docker Container Orchestrator"
              description="Engineered a resilient Distributed Key-Value Store, showcasing fault tolerance and high availability through seamless replication and ZooKeeper integration.
               Established a robust master-slave architecture, ensuring data integrity and continuous service availability."
              ghLink="https://github.com/arjl153/Docker-container-orchestrator"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cv}
              isBlog={false}
              title="Recognition of Similar Scripted Language Characters and Words"
              description="Developed and trained a parser for identification of similar scripted language characters using SVM and K-NN algorithms for image pre-processing, 
              which was presented at the International Conference on Adaptive Computational Intelligence (ICACI-2019)."
              ghLink="https://github.com/arjl153/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
