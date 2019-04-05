import React from "react"
import styled from "styled-components"
import { FaChevronRight } from "react-icons/fa"
const StyledButton = styled.button`
  border: none;
  box-shadow: none;
  font-family: inherit;
  background-color: transparent;
  color: #bb1d26;
  font-size: 15px;
  transition: 0.25s;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    margin-left: 5px;
  }
  &:hover {
    transform: translate(10px, 0);
  }
`

const StyledBody = styled.div`
  padding: 15px;
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2,
  p {
    margin-bottom: 10px;
  }
  .deets {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .body-time,
  .body-duration,
  .body-price {
    font-size: 0.85rem;
  }

  .body-content {
    padding: 1rem 0;
    font-size: 13px;
    line-height: 1.8;
  }
`

const Button = () => {
  return (
    <StyledButton>
      Find out more
      <FaChevronRight />
    </StyledButton>
  )
}

const CardBody = props => {
  return (
    <StyledBody>
      <div className="top">
        <h2>{props.title}</h2>
        <p className="body-time">{props.time}</p>
        <div className="deets">
          <p className="body-duration">{props.duration}</p>
          <p className="body-price">{props.price}</p>
        </div>
      </div>
      <p className="body-content">{props.text}</p>

      <Button />
    </StyledBody>
  )
}

export default CardBody
