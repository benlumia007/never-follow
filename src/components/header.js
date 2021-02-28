import React from 'react';
import { Link } from 'gatsby';

import Menu from './primaryMenu';

const Header = ( { siteTitle, siteDescription, primaryMenu } ) => (
    <header id="masthead" className="site-header">
        <div className="site-branding">
            <h1 className="site-title"><Link to="/">{ siteTitle }</Link></h1>
            <h3 className="site-description">{ siteDescription }</h3>
        </div>
        <Menu primaryMenu = { primaryMenu } />
    </header>
);

export default Header;