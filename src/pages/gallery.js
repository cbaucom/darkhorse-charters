import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Cloudinary from "../components/cloudinary"
import Container from "../components/styles/container"
import Gallery from "../components/gallery"

const GalleryPage = () => (
  <Layout>
    <SEO title="Gallery" />
    <Container>
      <h1>Gallery</h1>
      {/* <Cloudinary /> */}
      <Gallery />
    </Container>
  </Layout>
)

export default GalleryPage
