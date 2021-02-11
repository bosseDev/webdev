import React from "react"

// Components
import SEO from "../components/seo"
import Layout from "../components/Layout"
import ImageGrid from "../components/ImageGrid"
import HeroSection from "../components/HeroSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <ImageGrid />
  </Layout>
)

export default IndexPage