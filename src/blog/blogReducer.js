import { RECEIVE_POSTS, RECEIVE_POST, DELETE_POST } from './blogActions';

export default function (state = [], action) {
    switch (action.type) {
        case RECEIVE_POSTS: {
            return action.posts.slice(0, 10);
        }

        case RECEIVE_POST: {
            return state.map((post) => post.id === action.post.id ? action.post : post);
        }

        case DELETE_POST: {
            return state.filter((post) => post.id !== action.postId)
        }

        default: {
            return state;
        }
    }
}
