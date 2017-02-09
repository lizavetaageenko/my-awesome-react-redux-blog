import { RECEIVE_COMMENTS } from './commentsActions';

export default function (state = {}, action) {
    switch (action.type) {
        case RECEIVE_COMMENTS: {
            return Object.assign({}, state, {
                [action.comments[0].postId]: action.comments
            });
        }

        default: {
            return state;
        }
    }
}