import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FishBowl from "../components/fish-bowl"

const Container = styled.div`
  background: #fefefe;
  margin: 0 auto;
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 70vh;
`

const StyledLink = styled(Link)`
  appearance: none;
  background-image: linear-gradient(-180deg, #77b5e2 0%, #448ec7 100%);
  border: 1px solid #77b5e2;
  box-shadow: 0 1px 5px 0 RGBA(68, 142, 199, 0.9),
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
    box-shadow: 0 8px 18px RGBA(68, 142, 199, 1),
      inset 0 2px 1px RGBA(68, 142, 199, 1);
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found | F/V Dark Horse" />
    <Container>
      <h4>We're sorry. You seem to be lost at sea.</h4>
      <FishBowl />
      <StyledLink to="/">Go Home</StyledLink>
    </Container>
  </Layout>
)

export default NotFoundPage
