import React from 'react';

const footer = ( { siteTitle } ) => (
    <footer id="footer" className="site-footer">
        <div className="site-info">
            (C) { new Date().getFullYear() } { siteTitle }
        </div>
    </footer>
);

export default footer;