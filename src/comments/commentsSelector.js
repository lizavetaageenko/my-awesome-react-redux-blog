import { createSelector } from 'reselect'

const getComments = (state) => state.comments;
const getPostId = (state, props) => props.postId;

export const filterCommentsByPostId = createSelector(
    [ getComments, getPostId ],
    (comments, postId) => {
        return comments[postId];
    }
);