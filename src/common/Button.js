import React from 'react';

import './Button.css';

const Button = (props) => (
    <button
        {...props}
        className={`${props.className} button`}
    >
        <div className="hover"></div>
        <div className="label">{props.children}</div>
    </button>
);

Button.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ]),
    className: React.PropTypes.string
};

Button.defaultProps = {
    className: ''
};

export default Button;
