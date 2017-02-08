import React from 'react';

import Post from './post/Post';

const Posts = ({ posts }) => (
    <div>
        {
            posts.map((post) => (
                <Post
                    key={post.id}
                    post={post}
                />
            ))
        }
    </div>
);

export default Posts;

Posts.propTypes = {
    posts: React.PropTypes.array
};

Posts.defaultProps = {
    posts: []
};