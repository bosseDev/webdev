import React from "react"
import { graphql } from "gatsby"

// Components
import SEO from "../components/seo"
import Layout from "../components/Layout"
import PostLink from "../components/post-link"

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return  ( 
    <Layout>
      <SEO title="Blog" />
      <h1 className="blog">Blog</h1>
      <div className="blog-container">
        {Posts}
      </div>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`