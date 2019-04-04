import React from "react"
import styled from "styled-components"
import CardHeader from "./card-header"
import CardBody from "./card-body"

const StyledCard = styled.article`
  flex: 0 0 350px;
  background: #fff;
  margin: 10px auto;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  transition: 0.25s;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
  @media screen and (max-width: 420px) {
    flex: 0 0 300px;
  }
`

const Card = props => {
  return (
    <StyledCard>
      <CardHeader image={props.image} />
      <CardBody
        title={props.title}
        time={props.time}
        duration={props.duration}
        price={props.price}
        text={props.text}
      />
    </StyledCard>
  )
}

export default Card
