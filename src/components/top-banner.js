import React from "react"
import styled from "styled-components"

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 600;
  background: #fbfbfb;
  color: #111;
  height: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
`

const TopBanner = () => {
  return (
    <Container>
      <h3>Book Now: (603) 702-1570</h3>
    </Container>
  )
}

export default TopBanner
