import React from 'react';

import Button from '../common/Button';

import './Controls.css';

const Controls = ({ editBtnText, commentsBtnText, onEditBtnClick, onCommentsBtnClick, onDeleteBtnClick }) => (
    <div className="controls">
        <div className="controls-left">
            <Button className="green" onClick={onEditBtnClick}>{editBtnText}</Button>
            <Button className="red" onClick={onDeleteBtnClick}>Delete</Button>
        </div>

        <div className="controls-right">
            <Button className="blue" onClick={onCommentsBtnClick}>{commentsBtnText}</Button>
        </div>
    </div>
);

Controls.propTypes = {
    editBtnText: React.PropTypes.string,
    commentsBtnText: React.PropTypes.string,
    onEditBtnClick: React.PropTypes.func,
    onDeleteBtnClick: React.PropTypes.func,
    onCommentsBtnClick: React.PropTypes.func,
};

Controls.defaultProps = {
    editBtnText: 'Edit',
    commentsBtnText: 'Show Comments'
};

export default Controls;