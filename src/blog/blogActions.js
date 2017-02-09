import fetch from 'isomorphic-fetch';

import { MY_AWESOME_BLOG_WEB_API } from '../endpoints';

export const UPDATE_POSTS = 'UPDATE_POSTS';
export const getPosts = () => (dispatch) => {
    fetch(`${MY_AWESOME_BLOG_WEB_API}/posts`, {
        method: 'GET'
    })
        .then(response => response.json())
        .then((posts) => {
            if (posts && posts.length) {
                dispatch({
                    type: UPDATE_POSTS,
                    posts
                });
            }
        });
};

export const RECEIVE_POST = 'RECEIVE_POST';
export const updatePost = (post) => (dispatch) => {
    fetch(`${MY_AWESOME_BLOG_WEB_API}/posts/${post.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    })
        .then(response => response.json())
        .then((post) => {
            if (post) {
                dispatch({
                    type: RECEIVE_POST,
                    post
                });
            }
        });
};

