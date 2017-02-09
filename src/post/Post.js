import React from 'react';

import PostControls from './PostControls';
import Comments from '../comments/Comments';

class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            areCommentsShown: false
        };

        this.toggleComments = this.toggleComments.bind(this);
    }

    toggleComments() {
        const { areCommentsShown } = this.state;

        this.setState({
            areCommentsShown: !areCommentsShown
        });
    }

    renderComments() {
        const { areCommentsShown } = this.state;

        return areCommentsShown
            ? <Comments />
            : null;
    }

    render() {
        const {post} = this.props;

        return (
            <div>
                <h3>{post.title}</h3>
                <div>
                    {post.body}
                </div>
                <PostControls onShowCommentsClick={this.toggleComments}/>

                {this.renderComments()}
            </div>
        );
    }
}

export default Post;

Post.propTypes = {
    post: React.PropTypes.object
};

Post.defaultProps = {
    post: {}
};