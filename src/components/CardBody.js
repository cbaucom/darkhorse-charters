import React from "react"
import styled from "styled-components"
import { FaChevronRight } from "react-icons/fa"
import { Link } from "gatsby"

const StyledButton = styled(Link)`
  border: none;
  box-shadow: none;
  font-family: inherit;
  background-color: transparent;
  color: #0a5c9b;
  font-size: 1.25rem;
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
    color: #0a5c9b;
    font-size: 1.25rem;
  }

  .body-content {
    padding: 1rem 0;
    font-size: 0.85rem;
    line-height: 1.8;
  }

  .body-subtext {
    font-size: 0.85rem;
    padding-bottom: 0.5rem;
  }

  .ribbon {
    font-size: 20px;
    position: relative;
    display: inline-block;
    margin: 0.5rem -1.8rem 1.5rem;
    text-align: center;
    /* background: #ffd72a; */
    background: #97c6ea;
    color: #0a5c9b;
    padding: 0.5em;
    line-height: 1.5rem;
    @media (min-width: 480px) {
      margin: 0.5rem -1.6rem 1.5rem;
    }
  }
  .ribbon:before,
  .ribbon:after,
  .bold:before {
    content: "";
    position: absolute;
    border-style: solid;
  }
  .ribbon:before {
    bottom: 100%;
    left: 0;
    border-width: 0.5em 0.7em 0 0;
    border-color: transparent #0a5c9b transparent transparent;
  }
  .ribbon:after {
    top: 100%;
    right: 0;
    border-width: 0.5em 0.7em 0 0;
    border-color: #0a5c9b transparent transparent transparent;
  }
  .text {
    justify-content: center;
  }
  .bold:before {
    z-index: -1;
  }
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  img {
    max-height: 300px;
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
  bodyImage,
  ribbonText,
}) => {
  const hasSubText = subText.length === 0 ? false : true
  const hasBodyImage = bodyImage.length === 0 ? false : true
  const hasRibbon = ribbonText.length === 0 ? false : true
  return (
    <StyledBody>
      <div>
        <h2>{title}</h2>
        <div className="deets">
          <p className="body-time">{time}</p>
          <p className="body-price">{price}</p>
        </div>
        <p className="body-duration">{duration}</p>
      </div>
      <p className="body-content">{text}</p>
      {hasSubText && <p className="body-subtext">{subText}</p>}
      {hasBodyImage && (
        <ImageWrapper>
          <img src={bodyImage} alt={bodyImage} />
        </ImageWrapper>
      )}
      {hasRibbon && (
        <p className="ribbon">
          <span className="text">
            <strong className="bold">{ribbonText}</strong>
          </span>
        </p>
      )}
      <Button text={buttonText} to={link} />
    </StyledBody>
  )
}

export default CardBody
