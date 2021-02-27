import React from 'react';
import { Link } from 'gatsby';

const Header = ( { siteTitle, siteDescription } ) => (
    <header id="masthead" className="site-header">
        <div className="site-branding">
            <h1 className="site-title"><Link to="/">{ siteTitle }</Link></h1>
            <h3 className="site-description">{ siteDescription }</h3>
        </div>
    </header>
);

export default Header;