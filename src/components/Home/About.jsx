import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/myimg.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={8} lg={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, my name is <span className="yellow">Muhammadali</span> and I'm
              from
              <span className="yellow"> Uzbekistan.</span>
              <br />
              <br />I am a passionate and dedicated{" "}
              <b className="yellow">Full-Stack Developer</b> who is always
              excited to learn and build new things.
              <br />
              <br />I have strong knowledge of
              <b className="yellow"> HTML, CSS, JavaScript</b> and frontend
              frameworks like <b className="yellow">React.js</b>.
              <br />
              <br />
              On the backend, I work with{" "}
              <b className="yellow">Node.js, Express.js</b>, and databases like
              <b className="yellow"> MongoDB</b> and{" "}
              <b className="yellow">PostgreSQL</b>.
              <br />
              <br />
              I enjoy solving real-world problems and always exploring new
              technologies to grow as a developer.
              <br />
              <br />
              Currently, I'm focused on building full-stack web applications and
              improving my skills every day.
            </p>
          </Col>
          <Col
            md={4}
            lg={4}
            className="myAvtar d-flex justify-content-center align-items-center"
          >
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
              <img
                src={LaptopImg}
                className="img-fluid rounded shadow"
                alt="avatar"
                style={{ maxHeight: "350px", borderRadius: "20px" }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social text-center">
            <h1>FIND ME ON</h1>
            <p>
              Please feel free to <span className="yellow">connect</span> with
              me.
            </p>
            <ul className="home-about-social-links d-flex justify-content-center flex-wrap gap-3">
              <li className="social-icons">
                <a
                  href="https://github.com/gwdqflt5"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub size={30} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.x.com/Muhamma58641494"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="twitter"
                >
                  <AiOutlineTwitter size={30} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://t.me/muhammadalikun"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="telegram"
                >
                  <FaTelegram size={30} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://codewars.com/ISAGIKUN/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="codewars"
                >
                  <SiCodewars size={30} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
