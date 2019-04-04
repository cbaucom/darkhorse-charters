import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const GramWrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  padding: 1rem 0.5rem;
`

const Grid = styled.div`
  margin: 1rem 20px 5rem 20px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const Item = styled.a`
  position: relative;
  overflow: hidden;
  > div img {
    transition: all 0.3s ease 0s !important;
  }
  &:hover {
    box-shadow: 0 3px 5px 1px rgba(42, 42, 42, 0.4);
  }
`

const Cloudinary = () => (
  <StaticQuery
    query={graphql`
      query Cloudinary {
        cloudinary: allCloudinaryMedia(
          sort: { fields: created_at, order: DESC } # limit: 12
        ) {
          edges {
            node {
              id
              created_at
              format
              type
              secure_url
            }
          }
        }
      }
    `}
    render={data => (
      <GramWrapper>
        <Grid>
          {data.cloudinary.edges.map(({ node }) => {
            const pic = node.secure_url
            return (
              <Item key={node.id}>
                <img src={pic} alt={pic} />
              </Item>
            )
          })}
        </Grid>
      </GramWrapper>
    )}
  />
)

export default Cloudinary
