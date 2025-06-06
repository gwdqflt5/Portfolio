import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";

import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "./Social.css";

const Social = () => {
  return (
    <Container style={{ padding: "30px" }}>
      <Row>
        <Col md={12} className="contact-social">
          <div className="contact-text">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and{" "}
              <span className="yellow">connect.</span>
            </p>
          </div>
          <ul className="contact-social-links">
            <li className="contact-icons">
              <a
                href="https://github.com/gwdqflt5"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://t.me/muhammadalikun"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"
              >
                <FaTelegram />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://www.x.com/Muhamma58641494"
                target="_blank"
                rel="noreferrer"
                className="icon-color contact-social-icons"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="hhttps://codewars.com/ISAGIKUN/"
                target="_blank"
                rel="noreferrer"
                className="icon-color contact-social-icons"
              >
                <SiCodewars />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Social;
