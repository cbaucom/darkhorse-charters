import React from "react"
import styled from "styled-components"
import Card from "./card"
import groundCharterImage from "../images/tuna-brothers.jpg"
import bassCharterImage from "../images/darkhorse-docked.jpg"
import tunaCharterImage from "../images/big-tuna-fishing.jpg"
import privateCharterImage from "../images/darkhorse-fishing-tuna.jpg"

const Wrapper = styled.section`
  width: 100%;
  padding: 0.5rem;
  /* display: flex;
  flex-wrap: wrap;
  align-items: stretch; */
  @media (min-width: 768px) {
    padding: 0.5rem 0;
  }
`

const Charters = () => {
  return (
    <Wrapper>
      <Card
        image={groundCharterImage}
        title={"Ground Fish Charters"}
        time={"Starting April 15th"}
        duration={"7 - 9 hours"}
        price={"$1200"}
        text={`Off shore fishing the Jeffery’s ledge, and Stellwagen Bank. Sightings of whales, dolphins, porpoise and other sea creatures are not uncommon
        `}
        buttonText={"Find out more"}
        link={"charters"}
      />
      <Card
        image={bassCharterImage}
        title={"Bass Charters"}
        time={"May - June"}
        duration={"5 - 8 hours"}
        price={"$800 - $1000"}
        text={`Hire the F/V Dark Horse and it’s professional crew for a day adventure of your choice (ferrying service, day trips to local attractions, trip to beach, or design a trip to fit your needs)
        `}
        buttonText={"Find out more"}
        link={"charters"}
      />
      <Card
        image={privateCharterImage}
        title={"Private Boat Hire"}
        time={"May - June"}
        duration={"12 hours"}
        price={"$2000"}
        text={`Hire the F/V Dark Horse and it’s professional crew for a day adventure of your choice (ferrying service, day trips to local attractions, trip to beach, or design a trip to fit your needs)
        `}
        buttonText={"Find out more"}
        link={"charters"}
      />
      <Card
        image={tunaCharterImage}
        title={"Commerical Tuna Charters"}
        time={"July 1- December"}
        duration={"12 - 24 hours"}
        price={"$1600 - $2500"}
        text={`Come along on a commercial tuna fishing trip aboard the Dark Horse, we will be targeting Giant tuna (73” and up) using live bait and/or trolling gear. This is the ultimate experience to be part of. Catch the giant fish of a lifetime and come along for a serious fishing adventure. Travel to the fertile offshore waters of the gulf of Maine and see first hand what it is like to target a giant tuna.
          `}
        buttonText={"Find out more"}
        link={"charters"}
      />
    </Wrapper>
  )
}

export default Charters
