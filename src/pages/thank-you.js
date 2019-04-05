import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const Container = styled.div`
  background: #f6f6f6;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  text-align: center;
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
export default ({ location }) => {
  if (typeof window !== "undefined") {
    return (
      <Layout>
        <Container>
          <div className="text-wrapper">
            <h1>Thanks! 🎣</h1>
            <h3>We will be in touch shortly!</h3>
          </div>
          <StyledLink to="/">Back Home</StyledLink>
        </Container>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <Container>
          <div className="text-wrapper">
            <h1>Thanks! 🎣</h1>
            <h3>We will be in touch shortly!</h3>
          </div>
          <StyledLink to="/">Back Home</StyledLink>
        </Container>
      </Layout>
    )
  }
}
