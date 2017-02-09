import fetch from 'isomorphic-fetch';

import { MY_AWESOME_BLOG_WEB_API } from '../endpoints';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const getCommentsByPostId = (postId) => (dispatch) => {
    fetch(`${MY_AWESOME_BLOG_WEB_API}/posts/${postId}/comments`, {
        method: 'GET'
    })
        .then(response => response.json())
        .then((comments) => {
            if (comments && comments.length) {
                dispatch({
                    type: RECEIVE_COMMENTS,
                    comments
                });
            }
        });
};