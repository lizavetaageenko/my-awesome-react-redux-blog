import React from 'react';

import './Post.css';

const StaticContent = ({ title, body }) => (
    <div>
        <h3>{title}</h3>
        <div>{body}</div>
    </div>
);

StaticContent.propTypes = {
    title: React.PropTypes.string,
    body: React.PropTypes.string
};

StaticContent.defaultProps = {
    title: '',
    body: ''
};

export default StaticContent;