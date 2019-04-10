import React from "react"
import { FaCheck } from "react-icons/fa"
import { Card, Wrapper } from "./styles"

const WhatsProvided = () => {
  return (
    <Wrapper id="included">
      <Card>
        <h3>All Fishing Charters Include</h3>
        <ul>
          <li>
            <span>
              <FaCheck />
            </span>
            <span>Fishing equipment</span>
          </li>
          <li>
            <span>
              <FaCheck />
            </span>
            <span>All Tackle & Bait</span>
          </li>
          <li>
            <span>
              <FaCheck />
            </span>
            <span>Water & Ice</span>
          </li>
          <li>
            <span>
              <FaCheck />
            </span>
            <span>Fuel</span>
          </li>
          <li>
            <span>
              <FaCheck />
            </span>
            <span>Bathrooms & Showers (for overnight trips)</span>
          </li>
          <li>
            <span>
              <FaCheck />
            </span>
            <span>Rubber fishing boots can be borrowed for the trip</span>
          </li>
          <li>
            <span>
              <FaCheck />
            </span>
            <span>All fish will be cleaned and filleted</span>
          </li>
        </ul>
      </Card>
    </Wrapper>
  )
}

export default WhatsProvided
