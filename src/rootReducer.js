import { combineReducers } from 'redux';

import posts from './blog/blogReducer';
import comments from './comments/commentsReducer';

const rootReducer = combineReducers({
    posts,
    comments
});

export default rootReducer;