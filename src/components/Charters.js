import React from "react"
import styled from "styled-components"
import Card from "./Card"
import groundCharterImage from "../images/darkhorse-groundfish.jpg"
import bucketsOFish from "../images/bucketsOFish.jpg"
import customCharterImage from "../images/custom-charter.jpeg"
import tunaCharterImage from "../images/big-tuna-fishing.jpg"
import privateCharterImage from "../images/private-boat-hire.jpg"
import privateCharterImage2 from "../images/pushing-water.jpg"

const Wrapper = styled.section`
  width: 100%;
  padding: 0.5rem;
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
        price={"$1400"}
        text={`Off shore fishing the Jeffery’s ledge, and Stellwagen Bank. Sightings of whales, dolphins, porpoise and other sea creatures are not uncommon
        `}
        buttonText={"Find out more"}
        link={"charters"}
        bodyImage={bucketsOFish}
        ribbonText={"Go home with plenty of fish to eat"}
      />
      <Card
        image={customCharterImage}
        title={"Custom Charters"}
        time={"May - June"}
        duration={"5 - 8 hours"}
        price={"starting at $800"}
        text={`Fish for striped bass, bluefish, and mackerel in and around the Merrimack river and Ipswich bay.`}
        buttonText={"Find out more"}
        link={"charters"}
      />
      <Card
        image={privateCharterImage2}
        title={"Private Boat Hire"}
        time={"April - December"}
        duration={"4 hour minimum"}
        price={"$250/hour"}
        text={`Hire the F/V Dark Horse and it’s professional crew for a day adventure of your choice (ferrying service, day trips to local attractions, trip to beach, or design a trip to fit your needs)
        `}
        bodyImage={privateCharterImage}
        buttonText={"Find out more"}
        link={"charters"}
      />
      <Card
        image={tunaCharterImage}
        title={"Commercial Tuna Charters"}
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
