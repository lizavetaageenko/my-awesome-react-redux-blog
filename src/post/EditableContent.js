import React from 'react';

import './Post.css';

const EditableContent = ({ title, body, onTitleChange, onBodyChange }) => (
    <div>
        <div>
            <input className="post-title" value={title} onChange={onTitleChange} />
        </div>
        <div>
            <textarea className="post-body" value={body} onChange={onBodyChange}/>
        </div>
    </div>
);

EditableContent.propTypes = {
    title: React.PropTypes.string,
    body: React.PropTypes.string
};

EditableContent.defaultProps = {
    title: '',
    body: '',
    onTitleChange: '',
    onBodyChange: ''
};

export default EditableContent;