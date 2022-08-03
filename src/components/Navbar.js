import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

export default function Navbar() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title, 
        }
      }
    }
  `);
  const { title } = data.site.siteMetadata

  return (
    <nav>
      <h2>
        {title}
      </h2>
      <div className="links">
        <Link to="/">Home 홈</Link>
        <Link to="/about">About 에 대한</Link>
        <Link to="/projects">Gallery 갤러리</Link>
      </div>
    </nav>
  )
}

