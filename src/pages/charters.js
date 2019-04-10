import React from "react"
import styled from "styled-components"
import AnchorLink from "react-anchor-link-smooth-scroll"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/styles/container"
import HeroImage from "../components/image"
import Charters from "../components/charters"
import WhatsProvided from "../components/WhatsProvided"
import WhatToBring from "../components/WhatToBring"
import Card from "../components/card"
import bassCharterImage from "../images/bass-pic.png"
import groundCharterImage from "../images/ground-fish-pic.png"
import tunaCharterImage from "../images/tuna-brothers.jpg"
import privateCharterImage from "../images/darkhorse-fishing-tuna.jpg"
import Wrapper from "../components/styles/wrapper"

const StyledLink = styled(AnchorLink)`
  border: none;
  box-shadow: none;
  font-family: inherit;
  background-color: transparent;
  color: #448ec7;
  transition: 0.25s;
  text-decoration: none;
  display: inline-block;
  &:hover {
    transform: translate(0, -1px);
  }
`

const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;
  width: 100%;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default () => (
  <Layout>
    <SEO title="Charters | F/V Dark Horse" />
    <HeroImage imgsrc="darkhorse-docked.jpg" />
    <Container>
      <h1 className="center">Fishing Charter Packages</h1>
      <p className="center">
        All of our charters are private charters.{" "}
        <strong>Charter rates are inclusive for up to 6 people.</strong> No
        fishing licenses required. See our full list of{" "}
        <StyledLink offset="100" href="#included">
          what's provided
        </StyledLink>{" "}
        and{" "}
        <StyledLink offset="100" href="#what-to-bring">
          what you should bring
        </StyledLink>
        .
      </p>
      <Wrapper>
        <Card
          image={groundCharterImage}
          title={"Ground Fish Charters"}
          time={"Starting April 15th"}
          duration={"7 - 9 hours"}
          price={"$1200"}
          text={`Off shore fishing the Jeffery’s ledge, and Stellwagen Bank. Sightings of whales, dolphins, porpoise and other sea creatures are not uncommon
        `}
          subText={`Fishing species include cod, haddock, pollack, red fish, whiting, hake, ling, mackerel, herring, halibut, & dog fish. Go home with plenty of fresh fish, cleaned, filleted, and bagged ready to go for your dinner table. Limits of fish subject to change due to regulations`}
          buttonText={"Book Now"}
          link={"book-now"}
        />
        <Card
          image={bassCharterImage}
          title={"Bass Charters"}
          time={"May - June"}
          duration={"5 - 8 hours"}
          price={"$800 - $1000"}
          text={`Fishing options: Depending on timing and season conditions, tactics include:
        Light tackle casting for school bass
        Medium tackle trolling for school and large bass
        Medium tackle live bait and chunk fishing from a drift around the Merrimack River, Ipswich River, and Plum Island.

        `}
          buttonText={"Book Now"}
          link={"book-now"}
        />
        <Card
          image={tunaCharterImage}
          title={"Commerical Tuna Charters"}
          time={"July 1- December"}
          duration={"12 - 24 hours"}
          price={"$1600 - $2500"}
          text={`Come along on a commercial tuna fishing trip aboard the Dark Horse, we will be targeting Giant tuna (73” and up) using live bait and/or trolling gear. This is the ultimate experience to be part of. Catch the giant fish of a lifetime and come along for a serious fishing adventure. Travel to the fertile offshore waters of the gulf of Maine and see first hand what it is like to target a giant tuna.`}
          subText={`Giant tuna share the feeding grounds of whale, dolphins, sea birds, giant sunfish, sharks, and more. Sightings of all of these creatures are not uncommon. Your tuna trip will be one to remember.`}
          buttonText={"Book Now"}
          link={"book-now"}
        />
        <Card
          image={privateCharterImage}
          title={"Private Boat Hire"}
          time={"April - December"}
          duration={"12 hours"}
          price={"$2000"}
          text={`Hire the F/V Dark Horse and it’s professional crew for a day adventure of your choice (ferrying service, day trips to local attractions, trip to beach, or design a trip to fit your needs)
        `}
          subText={`Servicing the following locations: Isles of Shoals, Portsmouth, Portland, Rockport, Ipswich, or Boston
          `}
          buttonText={"Book Now"}
          link={"book-now"}
        />
      </Wrapper>
      <Grid>
        <WhatsProvided />
        <WhatToBring />
      </Grid>
    </Container>
  </Layout>
)
