// This file is going to run at build time in a nodejs environment.
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {

    const { data } = await graphql(`
    query Articles {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

    data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path: '/gallery/' + node.frontmatter.slug,
            component: path.resolve('./src/templates/gallery-details.js'),
            context: { slug: node.frontmatter.slug }
        })
    })

}