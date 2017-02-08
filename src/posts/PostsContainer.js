import React from 'react';
import { connect } from 'react-redux';

import Posts from './Posts';
import { getPosts } from './postsActions';

class PostsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        return (
            <Posts posts={this.props.posts} />
        );
    }
}

PostsContainer.propTypes = {
    posts: React.PropTypes.array
};

PostsContainer.defaultProps = {
    posts: []
};

export default connect(
    (state) => ({
        posts: state.posts,
    }),
    (dispatch) => ({
        getPosts: () => {
            dispatch(getPosts());
        }
    })
)(PostsContainer);