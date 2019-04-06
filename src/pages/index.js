import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import HeroImage from "../components/image"
import SEO from "../components/seo"
import bigFish from "../images/big-tuna-fishing.jpg"
import Instagram from "../components/instagram"
import Charters from "../components/charters"
import Container from "../components/styles/container"

const CTAContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  padding: 2.5rem 0.5rem 5rem;
  color: #fbfbfb;
  background: #111;
  z-index: 200;
  h2 {
    text-transform: uppercase;
    font-weight: 300;
    font-size: 1.5rem;
    letter-spacing: 5px;
    padding: 2rem 0.5rem;
  }
  @media (min-width: 768px) {
    padding: 5rem 0.5rem;
    h2 {
      font-size: 2.5rem;
    }
  }
`

const StyledLink = styled(Link)`
  appearance: none;
  background-image: linear-gradient(-180deg, #77b5e2 0%, #448ec7 100%);
  border: 1px solid #77b5e2;
  box-shadow: 0 1px 5px 0 RGBA(68, 142, 199, 0.8),
    inset 0 1px 0 0 RGBA(68, 142, 199, 1),
    inset 0 2px 4px 0 RGBA(68, 142, 199, 1);
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 0 auto;
  max-width: 200px;
  height: 50px;
  text-decoration: none;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  width: 100%;
  &:hover {
    transform: scale(1.01);
    box-shadow: 0px 0px 10px 4px RGBA(250, 250, 250, 0.8),
      inset 0 2px 1px RGBA(68, 142, 199, 1);
  }
`

const GoFishingContainer = styled.section`
  /* background: radial-gradient(ellipse at center, #1f3b5b 0%, #111 80%); */
  background: url(${bigFish}) no-repeat center/100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 600px;
  color: #fbfbfb;
  box-shadow: inset 0 0 0 2000px rgba(1, 1, 1, 0.4);
  h2 {
    text-transform: uppercase;
    font-weight: 300;
    font-size: 2.5rem;
    letter-spacing: 5px;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`darkhorse`, `fishing`, `charter`, `newburyport`, `massachusetts`, `tuna`, `bass`, `fish`, `newbury`, `gloucester`, `new england`, `commerical fishing`, `private charter`, `boat`, `boat charter`]} />
    <HeroImage imgsrc="darkhorse-fishing-tuna-short.jpg" />
    <CTAContainer>
      <h2>Now accepting reservations for 2019 charters!</h2>
      <StyledLink to="/book-now">Book Now</StyledLink>
    </CTAContainer>
    <Container>
      <Charters />
    </Container>
    <Instagram />

    <GoFishingContainer>
      <div className="overlay-effect" />
      <h2>Come fish with us!</h2>
      <p>No fishing licenses required</p>
      <StyledLink to="/book-now">Book Now</StyledLink>
    </GoFishingContainer>
  </Layout>
)

export default IndexPage
