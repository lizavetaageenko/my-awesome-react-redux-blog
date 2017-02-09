import fetch from 'isomorphic-fetch';

import { MY_AWESOME_BLOG_WEB_API } from '../endpoints';
import { deleteCommentsByPostId } from '../comments/commentsActions';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const getPosts = () => (dispatch) => {
    fetch(`${MY_AWESOME_BLOG_WEB_API}/posts`, {
        method: 'GET'
    })
        .then(response => response.json())
        .then((posts) => {
            if (posts && posts.length) {
                dispatch({
                    type: RECEIVE_POSTS,
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

export const DELETE_POST = 'DELETE_POST';
export const deletePost = (postId) => (dispatch) => {
    fetch(`${MY_AWESOME_BLOG_WEB_API}/posts/${postId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(() => {
            dispatch({
                type: DELETE_POST,
                postId
            });

            dispatch(deleteCommentsByPostId(postId));
        });
};

