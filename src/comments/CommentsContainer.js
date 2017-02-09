import React from 'react';
import { connect } from 'react-redux';

import Comments from './Comments';
import { getCommentsByPostId } from './commentsActions';
import { filterCommentsByPostId } from './commentsSelector';

class CommentsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getCommentsByPostId();
    }

    render() {
        return (
            <Comments comments={this.props.comments} />
        );
    }
}

CommentsContainer.propTypes = {
    comments: React.PropTypes.array
};

CommentsContainer.defaultProps = {
    comments: []
};

export default connect(
    (state, props) => ({
        comments: filterCommentsByPostId(state, props),
    }),
    (dispatch, props) => ({
        getCommentsByPostId: () => {
            dispatch(getCommentsByPostId(props.postId));
        }
    })
)(CommentsContainer);