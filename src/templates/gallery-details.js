import React from 'react'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from '../styles/gallery-details.module.css';
import { graphql } from 'gatsby'
import {motion} from 'framer-motion'

function GalleryDetails({ data }) {

    const { html } = data.markdownRemark;
    const { title, stack, featuredImg } = data.markdownRemark.frontmatter;

    return (
        <Layout>
            <div className={styles.details}>
                <h2>{title}</h2>
                <h3>{stack}</h3>
                <motion.div className={styles.featured}
                whileHover={{
                    position: 'relative',
                    zIndex: 1,
                    background: 'fff',
                    scale: [1, 1.2, 1.1], 
                    rotate: [0, 5, -5, 0],
                    transition: {
                        duration: .2,
                    }
                }}
                >
                    <GatsbyImage image={getImage(featuredImg.childImageSharp.gatsbyImageData)} alt="Gallery" className='radius' />
                </motion.div>
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