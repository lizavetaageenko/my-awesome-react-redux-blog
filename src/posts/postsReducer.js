import { UPDATE_POSTS } from './postsActions';

export default function (state = [], action) {
    switch (action.type) {
        case UPDATE_POSTS: {
            return action.posts.slice();
        }

        default: {
            return state;
        }
    }
}
