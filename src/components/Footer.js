import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `)
  const { copyright } = data.site.siteMetadata

  return (
    <footer>
      <a href='https://github.com/AugustoDiaz-Dev'>&copy; {copyright}</a>
    </footer>
  )
}

export default Footer