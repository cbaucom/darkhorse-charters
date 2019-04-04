import React from "react"
import Card from "./Card"
import groundCharterImage from "../images/big-tuna-fishing.jpg"
import bassCharterImage from "../images/darkhorse-docked.jpg"
import tunaCharterImage from "../images/tuna-brothers.jpg"
import privateCharterImage from "../images/darkhorse-fishing-tuna.jpg"
const Charters = () => {
  return (
    <div>
      <Card
        image={groundCharterImage}
        title={"Ground Fish Charters"}
        time={"Starting April 15th"}
        duration={"7 - 9 hours"}
        price={"$1200"}
        text={`Off shore fishing the Jeffery’s ledge, and Stellwagen Bank. Sightings of whales, dolphins, porpoise and other sea creatures are not uncommon
				`}
      />
      <Card
        image={tunaCharterImage}
        title={"Commerical Tuna Charters"}
        time={"July 1- December"}
        duration={"12 - 24 hours"}
        price={"$1600 - $2500"}
        text={`Come along on a commercial tuna fishing trip aboard the Dark Horse, we will be targeting Giant tuna (73” and up) using live bait and/or trolling gear. This is the ultimate experience to be part of. Catch the giant fish of a lifetime and come along for a serious fishing adventure. Travel to the fertile offshore waters of the gulf of Maine and see first hand what it is like to target a giant tuna.
				`}
      />
      <Card
        image={bassCharterImage}
        title={"Bass Charters"}
        time={"May - June"}
        duration={"5 - 8 hours"}
        price={"$800 - $1000"}
        text={`Hire the F/V Dark Horse and it’s professional crew for a day adventure of your choice (ferrying service, day trips to local attractions, trip to beach, or design a trip to fit your needs)
				`}
      />
      <Card
        image={privateCharterImage}
        title={"Private Boat Hire"}
        time={"May - June"}
        duration={"12 hours"}
        price={"$2000"}
        text={`Hire the F/V Dark Horse and it’s professional crew for a day adventure of your choice (ferrying service, day trips to local attractions, trip to beach, or design a trip to fit your needs)
				`}
      />
    </div>
  )
}

export default Charters
