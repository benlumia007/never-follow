/**
 * Layout component that queries for data
 * with Gatsby' useStaticQuery component
 * 
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';

const Layout = () => {
    const data = useStaticQuery( graphql`
    query {
        site {
            siteMetadata {
               title
               description
            }
        }
    }
  `)

    return (
        <>
            <a className="skip-link screen-reader-text" href="#main">Skip to the content</a>
            <Header 
                siteTitle={ data.site.siteMetadata.title }
                siteDescription = { data.site.siteMetadata.description }
            />
            <Footer siteTitle = { data.site.siteMetadata.title } />
        </>
    )
}

export default Layout;