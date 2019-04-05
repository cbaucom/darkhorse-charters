import React from "react"
import styled from "styled-components"
import { FiPhoneCall, FiMail } from "react-icons/fi"
import Layout from "../components/layout"
import Button from "../components/button"
import Container from "../components/styles/container"
import HeroImage from "../components/image"
import { Card } from "../components/styles/card"

const InfoWrapper = styled.div`
  padding: 0.5rem;
  h3,
  h4 {
    text-align: center;
  }
  p {
    margin: 0.5rem auto;
  }
  a {
    text-decoration: none;
    color: #448ec7;
  }
  .contact-text-wrapper,
  .info {
    li {
      text-decoration: none;
    }
  }
`

const SectionWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  margin: 2rem auto;
  padding: 0.5rem;
  text-align: left;
  width: 100%;
  h4 {
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 0.9rem;
  }

  .icon-wrapper {
    margin-right: 15px;
    svg {
      height: 35px;
      width: 35px;
      margin: 0 10px 0 0;
      color: #448ec7;
    }
  }

  .text-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
  }
`

const FormWrapper = styled.div`
  padding: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  form {
    text-align: left;
  }

  label {
    margin-bottom: 1rem;
    text-align: left;
    font-size: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    box-sizing: border-box;
    margin: 0.25rem 0 0.75rem;
    padding: 0.25rem;
    font-size: 1rem;
    border: 1px solid RGBA(68, 142, 199, 0.3);
    &:focus {
      outline: 0;
      border-color: #d81103;
    }
  }
  select {
    font-size: 1.25rem;
  }
  .same-line {
    display: grid;
    grid-template-columns: 1fr;
    margin: 0.5rem 0;
    @media (min-width: 600px) {
      grid-template-columns: 1fr 2fr;
    }
  }
`

export default () => (
  <Layout>
    <HeroImage imgsrc="darkhorse-fishing-tuna-short.jpg" />
    <Container>
      <h1>Book Now</h1>
      <InfoWrapper>
        <h3>Have questions or want to book a charter?</h3>

        <SectionWrapper>
          <div className="icon-wrapper">
            <FiPhoneCall />
          </div>
          <div className="text-wrapper">
            <h4>
              <a href="tel:1-603-702-1570">Give us a call</a>
            </h4>
            <p>
              Give us a call at (603) 702-1570 and let's book your charter
              today!
            </p>
          </div>
        </SectionWrapper>
        <SectionWrapper>
          <div className="icon-wrapper">
            <FiMail />
          </div>
          <div className="text-wrapper">
            <h4>
              <a href="mailto:darkhorsecharters@gmail.com">Send us an email</a>
            </h4>
            <p>
              Dark Horse Charters will be sure to make your fishing experience a
              memorable one. Reserve a fishing charter with us today!
            </p>
          </div>
        </SectionWrapper>
      </InfoWrapper>
      <FormWrapper>
        <Card>
          <h3>Request to book</h3>
          <form
            name="book-now"
            method="post"
            action="/thank-you"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <label>
              Name *
              <input id="name" name="name" type="text" required />
            </label>
            <label>
              Email *
              <input id="email" name="email" type="email" required />
            </label>
            <label>
              Phone *
              <input id="phone" name="phone" type="tel" required />
            </label>
            <label className="same-line">
              Number of People
              <select id="people" name="people[]">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </label>
            <label className="same-line">
              Charter Type:
              <select id="charter" name="charter[]">
                <option value="Commercial Tuna Charter">
                  Commercial Tuna Charter
                </option>
                <option value="Bass Charter">Bass Charter</option>
                <option value="Ground Fishing Charter">
                  Ground Fishing Charter
                </option>
                <option value="Private Boat Hire">Private Boat Hire</option>
              </select>
            </label>
            <label>
              Message:{" "}
              <textarea
                id="message"
                type="text"
                name="message"
                placeholder="Message"
              />
            </label>
            <Button title="Send" type="submit" />
          </form>
        </Card>
      </FormWrapper>
    </Container>
  </Layout>
)
