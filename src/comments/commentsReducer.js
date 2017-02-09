import { RECEIVE_COMMENTS, DELETE_COMMENTS } from './commentsActions';

export default function (state = {}, action) {
    switch (action.type) {
        case RECEIVE_COMMENTS: {
            return Object.assign({}, state, {
                [action.comments[0].postId]: action.comments
            });
        }

        case DELETE_COMMENTS: {
            return Object.assign({}, state, {
                [action.postId]: undefined
            });
        }

        default: {
            return state;
        }
    }
}