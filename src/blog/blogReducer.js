import { UPDATE_POSTS } from './blogActions';

export default function (state = [], action) {
    switch (action.type) {
        case UPDATE_POSTS: {
            return action.posts
                .slice(0, 10);
        }

        default: {
            return state;
        }
    }
}
