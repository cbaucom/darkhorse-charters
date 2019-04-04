import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { render } from "react-dom"
import Gallery from "react-photo-gallery"

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

const Item = styled.div`
  position: relative;
  overflow: hidden;
  > div img {
    transition: all 0.3s ease 0s !important;
  }
  &:hover {
    box-shadow: 0 3px 5px 1px rgba(42, 42, 42, 0.4);
  }
`
function columns(containerWidth) {
  let columns = 1
  if (containerWidth >= 500) columns = 2
  if (containerWidth >= 900) columns = 3
  if (containerWidth >= 1500) columns = 4
  return columns
}

const WPGallery = () => (
  <StaticQuery
    query={graphql`
      query WordpressMedia2 {
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
      // <GramWrapper>
      //   <Grid>
      <div>
        {data.wordpress.edges.map(({ node }) => {
          const pic = node.localFile.childImageSharp.fluid
          const photos = node.localFile.console.log(pic)
          return (
            // <Item key={node.id}>
            //   <Img fluid={pic} />
            // </Item>
            <Gallery photos={pic} columns={columns} />
          )
        })}
      </div>
      //   </Grid>
      // </GramWrapper>
    )}
  />
)

export default WPGallery
