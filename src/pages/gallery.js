import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/styles/container"
import WordpressMedia from "../components/wordpress-media"
// import WPGallery from "../components/gallery";

const GalleryPage = () => (
  <Layout>
    <SEO title="Gallery" />
    <Container>
      <h1>Gallery</h1>
      <WordpressMedia />
      {/* <WPGallery /> */}
    </Container>
  </Layout>
)

export default GalleryPage
