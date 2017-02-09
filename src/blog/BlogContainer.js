import React from 'react';
import { connect } from 'react-redux';

import Blog from './Blog';
import { getPosts } from './blogActions';

class BlogContainer extends React.Component {
    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        return (
            <Blog posts={this.props.posts} />
        );
    }
}

BlogContainer.propTypes = {
    posts: React.PropTypes.array
};

BlogContainer.defaultProps = {
    posts: []
};

export default connect(
    (state) => ({
        posts: state.posts,
    }),
    (dispatch) => ({
        getPosts: () => dispatch(getPosts())
    })
)(BlogContainer);