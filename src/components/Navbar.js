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
        <Link to="/">홈</Link>
        <Link to="/about">우리에 대해</Link>
        <Link to="/gallery">갤러리</Link>
      </div>
    </nav>
  )
}

