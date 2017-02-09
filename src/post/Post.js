import React from 'react';
import { connect } from 'react-redux';

import CommentsContainer from '../comments/CommentsContainer';
import StaticContent from './StaticContent';
import EditableContent from './EditableContent';
import Controls from './Controls';
import { updatePost, deletePost } from '../blog/blogActions';

class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            areCommentsShown: false,
            isEditMode: false,
            title: props.post.title,
            body: props.post.body,
        };
    }

    toggleComments = () => {
        const { areCommentsShown } = this.state;

        this.setState({areCommentsShown: !areCommentsShown});
    };

    toggleEditMode = () => {
        const { isEditMode, title, body } = this.state;
        const { post } = this.props;

        if (isEditMode && (title !== post.title || body !== post.body)) {
            this.props.updatePost({
                id: post.id,
                title,
                body
            });
        }

        this.setState({isEditMode: !isEditMode});
    };

    updateTitle = (e) => this.setState({title: e.target.value});
    updateBody = (e) => this.setState({body: e.target.value});

    renderComments = () => {
        const { areCommentsShown } = this.state;
        const { post } = this.props;

        return areCommentsShown ? <CommentsContainer postId={post.id} /> : null;
    };

    renderPostContent = () => {
        const { isEditMode, title, body } = this.state;

        const staticContent = <StaticContent title={title} body={body} />;
        const editableContent = (
            <EditableContent
                title={title}
                body={body}
                onTitleChange={this.updateTitle}
                onBodyChange={this.updateBody}
            />
        );

        return isEditMode ? editableContent : staticContent;
    };

    renderControls = () => {
        const { areCommentsShown, isEditMode } = this.state;
        const { post } = this.props;

        return (
            <Controls
                editBtnText={isEditMode ? 'Save' : 'Edit'}
                commentsBtnText={areCommentsShown ? 'Hide Comments' : 'Show Comments'}
                onEditBtnClick={this.toggleEditMode}
                onDeleteBtnClick={() => this.props.deletePost(post.id)}
                onCommentsBtnClick={this.toggleComments}
            />
        );
    };

    render() {
        return (
            <div>
                {this.renderPostContent()}
                {this.renderControls()}
                {this.renderComments()}
            </div>
        );
    }
}

Post.propTypes = {
    post: React.PropTypes.object
};

Post.defaultProps = {
    post: {}
};

export default connect(
    null,
    (dispatch) => ({
        updatePost: (post) => dispatch(updatePost(post)),
        deletePost: (postId) => dispatch(deletePost(postId))
    })
)(Post);