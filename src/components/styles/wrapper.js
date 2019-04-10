import styled from "styled-components"

const Wrapper = styled.section`
  width: 100%;
  padding: 0.5rem;
  ul {
    margin: 1rem 0;
  }
  li {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    list-style: none;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
    &:last-child {
      border-bottom: none;
    }
  }
  span {
    display: flex;
  }
  svg {
    color: #448ec7;
    margin-right: 15px;
  }

  @media (min-width: 768px) {
    padding: 0.5rem 0;
  }
`

export default Wrapper
