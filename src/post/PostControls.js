import React from 'react';

import Button from '../common/Button'
import './PostControls.css'

const PostControls = ({ onShowCommentsClick }) => (
    <div className="post-controls">
        <div className="post-controls-left">
            <Button>Edit</Button>
            <Button>Delete</Button>
        </div>

        <div className="post-controls-right">
            <Button onClick={onShowCommentsClick}>Show Comments</Button>
        </div>

    </div>
);

export default PostControls;