import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey, I am <span className="purple">Aditya Ramachandra </span>
            from <span className="purple">Shivamogga, India!</span>
            <br /><br/> I am currently in my final year, doing my Masters in Computer Science at Indiana University Bloomington.
            Also, I have had a great time working as a Software Developer at Infibeam Avenues Limited.
            <br />
            <br />
            Apart from coding, I also love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Physical Workout🏋️
            </li>
            <li className="about-activity">
              <ImPointRight /> Chess♟️
            </li>
            <li className="about-activity">
              <ImPointRight /> Badminton🏸
            </li>
            <li className="about-activity">
              <ImPointRight /> Football⚽
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Novels📖
            </li>
            <li className="about-activity">
              <ImPointRight /> Anime🉐
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Man is made by his belief. As he believes, so he is"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
