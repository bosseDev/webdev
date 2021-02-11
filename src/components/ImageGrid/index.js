import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import './ImageGrid.scss'

const ImageGrid = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, 
              name: {nin: ["background", "background2", "background3" "gatsby-icon", "profile", "programming"]}}) {
        edges {
          node {
            base
            childImageSharp {
              fluid(quality: 90, maxHeight: 600, maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className="image-container">
      <h1>Current projects</h1>
      <div className="image-grid">
        {data.allFile.edges.map((image, key) => (
          <Img
            key={key}
            className="image-item"
            fluid={image.node.childImageSharp.fluid}
            alt={image.node.base.split('.')[0]}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageGrid