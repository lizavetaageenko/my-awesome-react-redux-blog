import React from 'react';

const PostComments = ({ comments }) => (
    <div>
        {
            comments.map((comment) => (
                <div>
                    <h4>{comment.name}</h4>
                    <div>{comment.body}</div>
                </div>
            ))
        }
    </div>
);

export default PostComments;

PostComments.propTypes = {
    comments: React.PropTypes.array
};

PostComments.defaultProps = {
    comments: []
};