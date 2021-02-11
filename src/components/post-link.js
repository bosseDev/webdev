import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div style={{
      width: `80%`,
      height: `150px`,
      padding: `20px`,
      margin: `20px auto`,
    }}>
    <Link to={post.frontmatter.slug} style={{
      cursor: `pointer`,
      textDecoration: `none`,
      color: `#000`
    }}>
      <h2 style={{
        marginBottom: `16px`
      }}>{post.frontmatter.title}</h2>
      <p>{post.frontmatter.title}</p>
    </Link>
  </div>
)

export default PostLink