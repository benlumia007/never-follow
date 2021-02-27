import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const AboutPage = ( { data } ) => {
    return (
        <Layout>
            <h1>This is the About Page</h1>
        </Layout>
    )
}

export default AboutPage;