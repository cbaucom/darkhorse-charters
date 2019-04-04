import styled from "styled-components"

export const Card = styled.article`
  background: #fbfbfb;
  border-radius: 5px;
  padding: 15px;
  height: 100%;
  width: 100%;
  margin: 0.5rem 0 1rem;
  color: #111;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
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
