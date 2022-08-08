import React from 'react'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from '../styles/gallery-details.module.css';
import { graphql } from 'gatsby'

function GalleryDetails({ data }) {

    const { html } = data.markdownRemark;
    const { title, stack, featuredImg } = data.markdownRemark.frontmatter;

    return (
        <Layout>
            <div className={styles.details}>
                <h2>{title}</h2>
                <h3>{stack}</h3>
                <div className={styles.featured}>
                    <GatsbyImage image={getImage(featuredImg.childImageSharp.gatsbyImageData)} alt="Projects" className='radius' />
                </div>
                <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </Layout>
    )
}

export default GalleryDetails

export const query = graphql`
query GalleryDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
        html
        frontmatter {
            stack
            title
            featuredImg {
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
    }
}
`;