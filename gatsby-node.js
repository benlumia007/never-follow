/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateNode = ({ node }) => {
    console.log(`Node created of type "${node.internal.type}"`)
  }