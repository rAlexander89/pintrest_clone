
import React from 'react'
import { connect } from 'react-router-dom'
import { fetchUser } from '../../actions/user_action'
import BoardIndexItem from './board_index_item'

const mSTP = ({ entities: { users, boards }, session }, ownProps) => {
    return{
    
    }
}

const mDTP = dispatch => {
    return{
        fetchUser: userId => dispatch(fetchUser(userId))

    }
}

export default connect(mSTP, mDTP)(BoardIndexItem);