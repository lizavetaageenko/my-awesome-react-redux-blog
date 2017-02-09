import { UPDATE_POSTS, RECEIVE_POST } from './blogActions';

export default function (state = [], action) {
    switch (action.type) {
        case UPDATE_POSTS: {
            return action.posts.slice(0, 10);
        }

        case RECEIVE_POST: {
            return state.map((post) => {
                return post.id === action.post.id ? action.post : post;
            });
        }

        default: {
            return state;
        }
    }
}
