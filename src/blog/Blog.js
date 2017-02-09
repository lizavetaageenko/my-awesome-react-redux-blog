import React from 'react';

import Post from '../post/Post';

const Blog = ({ posts }) => (
    <div className="container">
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

export default Blog;

Blog.propTypes = {
    posts: React.PropTypes.array
};

Blog.defaultProps = {
    posts: []
};