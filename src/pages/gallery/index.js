import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/Layout'
import * as styles from "../../styles/gallery.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {motion } from 'framer-motion'

export default function Gallery({ data }) {
    console.log(data.gallery.nodes[0].frontmatter.thumb.childImageSharp.gatsbyImageData)
    const gallery = data.gallery.nodes
    const contact = data.contact.siteMetadata.contact
    return (
        <Layout>
            <div className={styles.portfolio}>
                <h2>갤러리</h2>
                <div className={styles.pictures}>
                    {gallery.map((item, i) => (
                        <Link to={"/gallery/" + item.frontmatter.slug} key={item.id}>
                            <motion.div 
                            initial={{opacity: 0, translateX: -50, translateY: -50}}
                            animate={{opacity: 1, translateX: 0, translateY: 0}}
                            transition={{duration: 0.3, delay: i * 0.5}}
                            >
                                <GatsbyImage image={getImage(item.frontmatter.thumb)} alt="Banner" quality={100} className="pic" /><h3>{item.frontmatter.title}</h3>
                                <p>{item.frontmatter.stack}</p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
                <p className='message'>Like what you see? Email me at:
                    <a href="mailto:augustordiaz@gmail.com"> {contact}</a>
                </p>
            </div>
        </Layout>

    )
}

export const query = graphql`
    query GalleryPage {
    gallery: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
        frontmatter {
            title
            stack
            slug
            thumb {
            childImageSharp {
                gatsbyImageData(
                    layout: FULL_WIDTH
                    formats: [AUTO, WEBP]
                )
            }
            }
        }
        id
        }
    }
    contact: site {
        siteMetadata {
        contact
        }
    }
    }`