import React, { useState } from "react"
import { navigate } from "gatsby"
import styled from "styled-components"
import { FiPhoneCall, FiMail } from "react-icons/fi"
import Layout from "../components/layout"
import Button from "../components/button"
// import Calendly from "../components/calendly"
import Container from "../components/styles/container"
import HeroImage from "../components/image"
import { Card } from "../components/styles/card"

const InfoWrapper = styled.div`
  padding: 0.5rem;
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
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
    border: 1px solid #0366ee;
    &:focus {
      outline: 0;
      border-color: #d81103;
    }
  }
  .same-line {
    display: flex;
    justify-content: start;
    align-items: baseline;
    margin-bottom: 0;
  }
  .same-line label {
    width: 53%;
  }
  .same-line select {
    margin-left: 1rem;
  }
`

export default () => {
  const [name, setName] = useState("")
  const handleInput = event => {
    setName(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()

    navigate("/thank-you/", { state: { name } })
  }

  return (
    <Layout>
      <HeroImage imgsrc="darkhorse-fishing-tuna-short.jpg" />
      <Container>
        <h1>Book Now</h1>
        <InfoWrapper>
          <h3>Have questions or want to book a charter?</h3>
          {/* <h4>
            Contact us by filling out the form on this page, or you can
            call/email us directly
          </h4> */}
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
                <a href="mailto:darkhorsecharters@gmail.com">
                  Send us an email
                </a>
              </h4>
              <p>
                Dark Horse Charters will be sure to make your fishing experience
                a memorable one. Reserve a fishing charter with us today!
              </p>
            </div>
          </SectionWrapper>
          {/* <Card>
            <div className="contact-text-wrapper">
              <h3>Contact Details</h3>
            </div>
            <p>
              George - <a href="tel:1-603-702-1570">(603) 702-1570</a>
            </p>
            <p>
              Rebecca (George's wife) -{" "}
              <a href="tel:1-508-451-5812">(508) 451-5812</a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:darkhorsecharters@gmail.com">
                darkhorsecharters@gmail.com
              </a>
            </p>
          </Card> */}
          {/* <Card>
            <div className="info">
              <h3>General Info</h3>
              <p>No fishing licenses required</p>
              <p>Guarantee/weather policy:</p>
              <ul>
                <li>
                  15% deposit to hold date and 24 hour cancellation policy
                </li>
              </ul>
              <p>Inclusions:</p>
              <ul>
                <li>
                  Fishing equipment, bait, tackle, water, ice, bathrooms, and
                  showers (for overnight trips).
                </li>
                <li>Rubber fishing boots can be borrowed for the trip.</li>
                <li>Fish will be cleaned and filleted.</li>
              </ul>
              <p>What to Bring:</p>
              <ul>
                <li>Lunch</li>
                <li>Appropriate foot wear</li>
                <li>Sunglasses, Hat, Sunscreen</li>
                <li>Foul weather gear and extra layers</li>
                <li>
                  You are more than welcome to bring any of your own fishing
                  equipment
                </li>
              </ul>
              <p>Fishing regulations subject to change</p>
            </div>
          </Card> */}
        </InfoWrapper>
        <FormWrapper>
          <Card>
            <h3>Request to book</h3>
            <form
              name="book-now"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
            >
              <label>
                Name *
                <input
                  type="text"
                  value={name}
                  onChange={handleInput}
                  required
                />
              </label>
              <label>
                Email *
                <input type="email" required />
              </label>
              <label>
                Phone *
                <input type="tel" required />
              </label>
              <label className="same-line">
                Number of People
                <select name="people[]">
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
                <select name="charter[]">
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
                  // value={this.state.message}
                  // onChange={this.handleInputChange}
                />
              </label>
              <Button title="Send" type="submit" />
            </form>
          </Card>
        </FormWrapper>
        {/* <Calendly /> */}
      </Container>
    </Layout>
  )
}
