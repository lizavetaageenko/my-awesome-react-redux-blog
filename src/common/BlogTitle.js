import React from 'react';

import logo from '../logo.svg';
import './BlogTitle.css';

const BlogTitle = (props) => (
    <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{props.children}</h1>
    </div>
);

BlogTitle.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ])
};

export default BlogTitle;