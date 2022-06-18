import React from "react"

// Gatsby
import { useStaticQuery, graphql } from "gatsby"

// React Helmet
import Helmet from "react-helmet"

const Seo = ({ title, description }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <Helmet
      htmlAttributes={{ lang: `en` }}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
    >
      <title>{title}</title>
      <meta
        name="description"
        content={description || data.site.siteMetadata.description}
      />
    </Helmet>
  )
}

export default Seo
