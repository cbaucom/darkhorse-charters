import styled from "styled-components"

export const Card = styled.article`
  background: #fff;
  margin: 10px auto;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  transition: 0.25s;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  h2 {
    margin-top: 0;
    margin-bottom: 0.1rem;
  }
  @media (min-width: 767px) {
    margin-bottom: 2rem;
  }
`
