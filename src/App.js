import React, {Component} from 'react';

import PostsContainer from './posts/PostsContainer';
import BlogTitle from './common/BlogTitle';

import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <BlogTitle>My Awesome Blog</BlogTitle>
                <PostsContainer />
            </div>
        );
    }
}

export default App;
