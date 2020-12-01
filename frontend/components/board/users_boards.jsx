import React from 'react';
import BoardIndexItem from './board_index_item';
import BoardCreateContainer from './board_create_container'


class UsersBoardsIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
    this.props.fetchBoards()
    }



    render() {
        let { currentUser, userId, userBoards } = this.props;
        if ( userBoards === null ) return null
        debugger

        return (
            <div>
                <p>howdy partner! This is where I'm gonna put down some cool boards, I'll tell you hwut!</p>
                <div className='board-index-container'>
                    {userBoards.map((userBoard) => (
                        <BoardIndexItem
                            board={userBoard}
                            key={userBoard.id}
                            currentUserId={userId}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default UsersBoardsIndex;