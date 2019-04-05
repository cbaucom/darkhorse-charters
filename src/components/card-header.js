import React from "react"
import styled from "styled-components"

const StyledCardHeader = styled.header`
  height: 300px;
  padding: 15px;
  width: 100%;
  background-size: cover;
  background-position: center;
  @media (min-width: 768px) {
    width: 400px;
    min-height: 100%;
  }
`

const CardHeader = props => {
  const { image } = props
  var style = {
    backgroundImage: "url(" + image + ")",
  }

  return <StyledCardHeader style={style} id={image} />
}

export default CardHeader
