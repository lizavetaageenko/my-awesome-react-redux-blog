import React from 'react';

import CommentsContainer from '../comments/CommentsContainer';
import Button from '../common/Button';
import './Post.css';

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
        const { post } = this.props;

        return areCommentsShown
            ? <CommentsContainer postId={post.id} />
            : null;
    }

    render() {
        const { areCommentsShown } = this.state;
        const { post } = this.props;

        return (
            <div>
                <h3>{post.title}</h3>
                <div>
                    {post.body}
                </div>
                <div className="post-controls">
                    <div className="post-controls-left">
                        <Button>Edit</Button>
                        <Button>Delete</Button>
                    </div>

                    <div className="post-controls-right">
                        <Button onClick={this.toggleComments}>
                            {areCommentsShown ? 'Hide Comments' : 'Show Comments'}
                        </Button>
                    </div>

                </div>

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