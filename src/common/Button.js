import React from 'react';

import './Button.css';

const Button = (props) => (
    <button
        {...props}
        className={`${props.className} button`}
    >
        {props.children}
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
