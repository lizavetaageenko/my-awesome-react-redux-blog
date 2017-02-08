import React from 'react';

import PostControls from './PostControls';
import PostComments from './PostComments';

const Post = ({ post }) => (
    <div>
        <h3>{post.title}</h3>
        <div>
            {post.body}
        </div>
        <PostControls />
        <PostComments />
    </div>
);

export default Post;

Post.propTypes = {
    post: React.PropTypes.object
};

Post.defaultProps = {
    post: {}
};