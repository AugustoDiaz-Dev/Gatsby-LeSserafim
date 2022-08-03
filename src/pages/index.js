import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Home({ data }) {
  const image = getImage(data.file.childImageSharp.gatsbyImageData)

  return (
    <Layout>
      <header className={styles.header}>
        <div>
          <h3>I'm Fearless</h3>
          <h1>Le Sserafim</h1>
          <p>대한민국의 K팝 밴드</p>
          <Link className={styles.btn} to="/projects">Gallery 갤러리</Link>
        </div>
        <a href="https://le-sserafim.com/" className="banner">
          <GatsbyImage image={image} alt="Banner" className="radius" />
        </a>
      </header>
    </Layout>
  )
}

export const query = graphql`
query Banner {
  file(relativePath: {eq: "banner.webp"}) {
    childImageSharp {
      gatsbyImageData(
        layout: FULL_WIDTH
        placeholder: BLURRED
        formats: [AUTO, WEBP]
        )
    }
  }
}
`