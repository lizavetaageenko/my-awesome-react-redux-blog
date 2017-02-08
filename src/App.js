import React, {Component} from 'react';

import Posts from './posts/Posts';
import BlogTitle from './common/BlogTitle';

import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <BlogTitle>My Awesome Blog</BlogTitle>
                <Posts />
            </div>
        );
    }
}

export default App;
