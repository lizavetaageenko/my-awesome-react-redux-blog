import React from 'react';

import Button from '../common/Button';

const Controls = ({ editBtnText, commentsBtnText, onEditBtnClick, onCommentsBtnClick, onDeleteBtnClick }) => (
    <div className="post-controls">
        <div className="post-controls-left">
            <Button onClick={onEditBtnClick}>{editBtnText}</Button>
            <Button onClick={onDeleteBtnClick}>Delete</Button>
        </div>

        <div className="post-controls-right">
            <Button onClick={onCommentsBtnClick}>{commentsBtnText}</Button>
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