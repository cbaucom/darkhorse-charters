import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const ButtonContainer = styled.div`
  /* background-image: linear-gradient(0deg, #bbc6cd 3%, #e2ebf0 100%);
  border-radius: 5px;
  border: 1px solid #8d8d8d;
  box-shadow: 0 2px 4px 0 rgba(42, 42, 42, 0.4),
    inset 0 1px 3px 0 rgba(255, 255, 255, 0.5); */
  display: flex;
  padding: 20px;
  margin: 0 auto;
  max-width: 300px;
  width: 100%;
  height: 100px;
  button {
    appearance: none;
    background-image: linear-gradient(-180deg, #77b5e2 0%, #448ec7 100%);
    border: 1px solid #77b5e2;
    box-shadow: 0 1px 5px 0 RGBA(68, 142, 199, 0.9),
      inset 0 1px 0 0 RGBA(68, 142, 199, 1),
      inset 0 2px 4px 0 RGBA(68, 142, 199, 1);
    /* background-image: linear-gradient(-180deg, #1eb52a 0%, #0d941c 100%);
    border: 1px solid #0c6b16;
    box-shadow: 0 1px 5px 0 rgba(9, 116, 21, 0.5),
      inset 0 1px 0 0 rgba(255, 255, 255, 0.5),
      inset 0 2px 4px 0 rgba(255, 255, 255, 0.5); */
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    width: 100%;
  }
  button:hover {
    transform: scale(1.01);
    /* box-shadow: 0 8px 18px rgba(9, 110, 64, 0.4),
      inset 0 2px 1px rgba(255, 255, 255, 0.6); */
    box-shadow: 0 8px 18px RGBA(68, 142, 199, 0.4),
      inset 0 2px 1px RGBA(68, 142, 199, 0.1);
  }
`

const Button = ({ title }) => (
  <ButtonContainer>
    <button type="submit">{title}</button>
  </ButtonContainer>
)

Button.defaultProps = {
  title: `Click Me`,
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Button
