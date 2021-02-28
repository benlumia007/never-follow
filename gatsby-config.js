/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: `Benjamin Lu`,
        description: "WordPress Developer",
        primaryMenu: [
            {
                name: `Home`,
                url: `/`,
            },
            {
                name: `About`,
                url: `/about`
            },
            {
                name: `Contact`,
                url: `/contact`
            }
        ]
    },
    plugins: [
        `gatsby-plugin-sass`,
        'gatsby-transformer-remark',
    ]
}