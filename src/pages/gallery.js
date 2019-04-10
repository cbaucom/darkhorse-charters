import React from "react"
import { Layout, SEO, WordpressMedia } from "../components"
import { Container } from "../components/styles"

const GalleryPage = () => (
  <Layout>
    <SEO title="Gallery" />
    <Container>
      <h1>Gallery</h1>
      <WordpressMedia />
    </Container>
  </Layout>
)

export default GalleryPage
