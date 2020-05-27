import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const GramWrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  /* padding: 1rem 0.5rem; */
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .gatsby-image-wrapper {
    /* width: 300px; */
    height: 100%;
    overflow: hidden;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }
`

const Grid = styled.div`
  margin: 1rem 20px 5rem 20px;
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const Item = styled.div`
  margin: 1rem 0.5rem;
  &:hover {
    box-shadow: 0 3px 5px 1px rgba(42, 42, 42, 0.4);
  }
`

const WordpressMedia = () => (
  <StaticQuery
    query={graphql`
      query WordpressMedia {
        wordpress: allWordpressWpMedia {
          edges {
            node {
              id
              alt_text
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <GramWrapper>
        <Grid>
          {data.wordpress.edges.sort().reverse().map(({ node }) => {
            const pic = node.localFile.childImageSharp.fluid
            return (
              <Item key={node.id}>
                <Img fluid={pic} />
              </Item>
            )
          })}
        </Grid>
      </GramWrapper>
    )}
  />
)

export default WordpressMedia
