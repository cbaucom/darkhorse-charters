import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Gallery from "react-photo-gallery"

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
      <div>
        {data.wordpress.edges.map(({ node }) => {
          const pic = node.localFile.childImageSharp.fluid
          return <Gallery photos={pic} columns={columns} />
        })}
      </div>
    )}
  />
)

export default WPGallery
