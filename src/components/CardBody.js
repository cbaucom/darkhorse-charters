import React from "react"
import styled from "styled-components"
import { FaChevronRight } from "react-icons/fa"
import { Link } from "gatsby"

const StyledButton = styled(Link)`
  border: none;
  box-shadow: none;
  font-family: inherit;
  background-color: transparent;
  color: #448ec7;
  font-size: 1rem;
  transition: 0.25s;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  svg {
    margin-left: 5px;
  }
  &:hover {
    transform: translate(5px, 0);
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
  .body-duration {
    font-size: 0.85rem;
  }
  .body-price {
    color: #448ec7;
    font-size: 1.25rem;
  }

  .body-content {
    padding: 1rem 0;
    font-size: 0.85rem;
    line-height: 1.8;
  }
`

const Button = ({ to, text }) => {
  return (
    <StyledButton to={`/${to}`}>
      {text}
      <FaChevronRight />
    </StyledButton>
  )
}

const CardBody = ({
  title,
  time,
  price,
  duration,
  text,
  link,
  buttonText,
  subText,
}) => {
  return (
    <StyledBody>
      <div className="top">
        <h2>{title}</h2>
        <div className="deets">
          <p className="body-time">{time}</p>
          <p className="body-price">{price}</p>
        </div>
        <p className="body-duration">{duration}</p>
      </div>
      <p className="body-content">{text}</p>
      <p className="body-content">{subText}</p>

      <Button text={buttonText} to={link} />
    </StyledBody>
  )
}

export default CardBody
