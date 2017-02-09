import React from 'react';

import logo from '../logo.svg';
import './BlogHeader.css';

const BlogHeader = (props) => (
    <div className="header">
        <div className="header-container container">
            <img src={logo} className="header-logo" alt="logo" />
            <h1 className="header-title">{props.children}</h1>
        </div>
    </div>
);

BlogHeader.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ])
};

export default BlogHeader;