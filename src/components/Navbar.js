import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import {AiFillHome} from 'react-icons/ai'

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
        <Link to="/">홈 Home</Link>
        <Link to="/about">약 About</Link>
        <Link to="/gallery">사진 Pics</Link>
      </div>
    </nav>
  )
}

