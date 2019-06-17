import React from "react"
import styled from "styled-components"

import { Layout, SEO, HeroImage } from "../components"
import { Container } from "../components/styles"
import TunaBros from "../images/tuna-brothers-bw.jpg"
import PushingWater from "../images/pushing-water.jpg"
import FlagDay from "../images/darkhorse-flagday.jpg"

const About = styled.section`
  text-align: center;
  li {
    /* list-style: none; */
    padding: 0.25rem 1rem;
    text-align: left;
  }
`

const Captains = styled.section`
  text-align: center;
  li {
    list-style: none;
    padding: 0.5rem;
  }
`

const OurVessel = () => (
  <Layout>
    <SEO title="About | F/V Dark Horse" />
    <HeroImage imgsrc="darkhorse-docked.jpg" />
    <Container>
      <About>
        <h1>About the F/V Dark Horse</h1>

        <p>
          The Dark Horse is a brand new state-of-the-art fishing machine
          launched in September 2018. She was constructed at HnH Marine in
          Stueben Maine, over a period of 2 years.
        </p>
        <p>
          She was constructed off of the standard Osmond Beal 42’ hull, which
          was widened by 2.5’ and raised by adding 6” of sheer, to provide a
          large stable sea worth platform. She is constructed entirely of
          composite materials, making her extremely rugged, light weight, and
          fuel efficient. The Dark Horse was designed from Stem to Stern for
          Fishability. The Dark Horse was designed to have the combination of
          the maximum size and sea kindly handling while still remaining fuel
          efficient and economical to operate for our commercial fishing
          operations .
        </p>
        <br />
        <img src={PushingWater} alt="Pushing water" />

        <h3>Boat Specifications</h3>
        <ul>
          <li>Length 42’ Breadth 17’8”</li>
          <li>
            Top of the line Simrad navigation equipment, radar, and auto pilot.
          </li>
          <li>
            With over 25’ of deck space and 17’ of beam the DarkHorse has one of
            the largest cockpits of any boat in the fleet.
          </li>
          <li>
            Power: Clean efficient John Deere 6135SMF 13.5L 750 HP Inboard
            diesel producing cruising speeds of 17 knots.
          </li>
          <li>9kw Northern light generator.</li>
          <li>
            Highlights include large In deck fish hold, freezer, picnic table,
            178 gallon live-well, and over 25 rod holders.
          </li>
          <li>
            Inside our large roomy cabin is a full sized wrap around bench that
            doubles as a day bunk, satellite TV, AM-FM stereo, stove, barbecue,
            fully enclosed head, stand up shower with hot/cold freshwater, 4
            full sized bunks, 12v/110v systems
          </li>
          <li>
            Fully equipped with commercial rated safety equipment including life
            raft, EPIRB, Survival suits, and more.
          </li>
          <li>
            The Dark Horse will get you to the fishing grounds in comfort,
            safety, and style.
          </li>
        </ul>
      </About>
    </Container>
    <Container>
      <Captains>
        <img src={TunaBros} alt="George and Will with large tuna fish" />
        <h1>Captains</h1>
        <h3>George French and Will French</h3>
        <p>
          George and Will French are brothers and co-owners of the Dark Horse.
          They began fishing by the time they could walk and have pursued that
          passion throughout their lives. They have been saltwater fishing the
          waters in and around Ipswich bay since childhood, and have owned 3
          boats prior to the Dark Horse. Most recently owning the Betsy G a 37’
          Repco lobster boat which they commercially fished for Tuna for the
          last 7 years. Together they have caught many giant Bluefin Tuna.{" "}
        </p>
        <p>
          Will is a also a turbine mechanic/hydro operator by trade and keeps
          all the mechanical systems in top working condition, and is know for
          his ability to fix absolutely anything, George is a USCG Certified
          captain, a skilled operator, and fishermen; the combination makes the
          Dark Horse a winning team and will provide for the ultimate fishing
          experience.
        </p>
      </Captains>
    </Container>
    <HeroImage imgsrc="tuna-brothers.jpg" />
  </Layout>
)

export default OurVessel
