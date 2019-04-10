import styled from "styled-components"

const Card = styled.article`
  background: #fff;
  padding: 1rem;
  margin: 1rem auto;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  transition: 0.25s;
  display: flex;
  flex-direction: column;
  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }

  h2 {
    margin-top: 0;
    margin-bottom: 0.1rem;
  }
  @media (min-width: 767px) {
    /* custom nonsense */
    min-height: 603px;
  }
  @media (min-width: 800px) {
    /* custom nonsense */
    min-height: 530px;
  }
`
export default Card
