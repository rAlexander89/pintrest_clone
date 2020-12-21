
import { connect } from 'react-redux'
import { createComment } from '../../actions/comment_actions'
import PinCreateCommentForm from './pin_comment_create_form'

const mSTP = (state) => {
    
    return {
    
    }
}

const mDTP = dispatch => {
    
    return {
        createComment: comment => dispatch(createComment(comment))
    }
}

export default connect(mSTP, mDTP)(PinCreateCommentForm);