import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';

export default ( { data } ) => {
    const about = data.markdownRemark;

    return (
        <Layout>
            <header className="entry-header">
                <h1 className="entry-title">{ about.frontmatter.title }</h1>
            </header>
        </Layout>
    );
};