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
    posts: [
        { id: '1', title: 'Hospital', body: 'lalala' },
        { id: '2', title: 'Police', body: 'lalala' },
        { id: '3', title: 'School', body: 'lalala' },
        { id: '4', title: 'Office', body: 'lalala' },
        { id: '5', title: 'Theatre', body: 'lalala' }
    ]
};