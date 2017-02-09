import React, {Component} from 'react';

import BlogContainer from './blog/BlogContainer';
import BlogHeader from './common/BlogHeader';

import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <BlogHeader>My Awesome Blog</BlogHeader>
                <BlogContainer />
            </div>
        );
    }
}

export default App;
