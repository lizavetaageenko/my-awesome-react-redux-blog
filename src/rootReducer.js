import { combineReducers } from 'redux';

import posts from './blog/blogReducer';

const rootReducer = combineReducers({
    posts
});

export default rootReducer;