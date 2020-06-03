import styled from "styled-components"

const Container = styled.div`
  background: #fefefe;
  margin: 2rem auto;
  padding: 1rem;
  width: 100%;
  max-width: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    margin: 4rem auto;
  }
`
export default Container
