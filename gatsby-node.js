const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allContentfulBlogPost(limit: 1000) {
            edges {
              node {
                blogTitle
                id
              }
            }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          reject(result.errors)
        }

      const blogTemplate = path.resolve(`./src/templates/blog-post.js`)
       _.each(result.data.allContentfulBlogPost.edges, edge => {
         createPage({
           path: `/posts/${edge.node.blogTitle}/`,
            component: slash(blogTemplate),
            context: {
              id: edge.node.id,
            },
          })
        })
      })
      resolve()
    })
  }
