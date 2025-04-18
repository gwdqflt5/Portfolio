import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Contact.css";

const Contact = () => {
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });

  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setDone(false);
    setNotDone(false);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const { from_name, reply_to, message } = formData;

    if (!from_name || !reply_to || !message) {
      setNotDone(true);
      return;
    }

    if (!validateEmail(reply_to)) {
      setNotDone(true);
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        "service_y22k8st", // Correct Service ID
        "template_6z5idye", // Verify this Template ID
        formRef.current,
        "your_correct_public_key" // Replace with the correct Public Key
      )
      .then(
        (result) => {
          console.log("SUCCESS:", result.status, result.text);
          setDone(true);
          setLoading(false);
          setFormData({ from_name: "", reply_to: "", message: "" });
        },
        (error) => {
          console.error("FAILED:", error.status, error.text);
          setNotDone(true);
          setLoading(false);
        }
      );
  };

  return (
    <Container style={{ paddingTop: "50px" }}>
      <Row>
        <Col md={6} className="c-left">
          <h1>Get in Touch</h1>
          <h1 className="yellow">Contact me</h1>
        </Col>
        <Col md={6} className="c-right">
          <form ref={formRef} onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              className="user"
              placeholder="Name"
              onChange={handleChange}
              value={formData.from_name}
              aria-label="Your Name"
            />
            <input
              type="email"
              name="reply_to"
              className="user"
              placeholder="Email"
              onChange={handleChange}
              value={formData.reply_to}
              aria-label="Your Email"
            />
            <textarea
              name="message"
              className="user"
              placeholder="Message"
              onChange={handleChange}
              value={formData.message}
              aria-label="Your Message"
            />
            <span className="not-done">
              {notDone &&
                (validateEmail(formData.reply_to)
                  ? "Please fill in all the fields!"
                  : "Please enter a valid email address!")}
            </span>
            <Button type="submit" className="button" disabled={done || loading}>
              {loading ? "Sending..." : "Send"}
            </Button>
            <span className="done">
              {done &&
                "Thanks for your message! I will get back to you shortly."}
            </span>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
