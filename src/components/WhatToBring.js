import React from "react"
import { FaCheck } from "react-icons/fa"
import { Card } from "./styles/card"
import Wrapper from "./styles/wrapper"

const WhatToBring = () => {
  return (
    <Wrapper id="what-to-bring">
      <Card>
        <h3>What To Bring</h3>
        <ul>
          <li>
            <span>
              <FaCheck />
            </span>
            <span>Sunscreen</span>
          </li>
          <li>
            <span>
              <FaCheck />
            </span>
            <span>Sunglasses</span>
          </li>
          <li>
            <span>
              <FaCheck />
            </span>
            <span>Hat</span>
          </li>
          <li>
            <span>
              <FaCheck />
            </span>
            <span>Camera</span>
          </li>
          <li>
            <span>
              <FaCheck />
            </span>
            <span>Appropriate foot wear</span>
          </li>
          <li>
            <span>
              <FaCheck />
            </span>
            <span>Food and Drinks</span>
          </li>
          <li>
            <span>
              <FaCheck />
            </span>
            <span>Foul weather gear and extra layers</span>
          </li>
          <li>
            <span>
              <FaCheck />
            </span>
            <span>
              You are more than welcome to bring any of your own fishing
              equipment
            </span>
          </li>
        </ul>
      </Card>
    </Wrapper>
  )
}

export default WhatToBring
