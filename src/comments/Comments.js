import React from 'react';

const PostComments = ({ comments }) => (
    <div>
        <h4>Lalalalala</h4>
        {
            comments.map((comment) => (
                <div>
                    <h4>Lalalalala</h4>
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