import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/styles/container"
import HeroImage from "../components/image"
import Charters from "../components/charters"
import { Card } from "../components/styles/card"

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1.25rem;
  line-height: 2;
  margin: 0 0 1.5em;
  width: 100%;
  td {
    border-top: 2px solid rgba(0, 0, 0, 0.05);
    padding: 0.5rem 0.5rem 0.5rem 0;
    border-bottom: none;
  }
  @media screen and (max-width: 767px) {
    font-size: 1rem;
  }
`

export default () => (
  <Layout>
    <SEO title="Charters" />
    <HeroImage imgsrc="darkhorse-docked.jpg" />
    <Container>
      <div className="pricing-table">
        <h2>Charters</h2>
        <Charters />
        <Card>
          <div className="info">
            <h3>General Info</h3>
            <p>No fishing licenses required</p>
            <p>Guarantee/weather policy:</p>
            <ul>
              <li>15% deposit to hold date and 24 hour cancellation policy</li>
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
        </Card>
      </div>
      <div className="images" />
    </Container>
  </Layout>
)
