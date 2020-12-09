import React from 'react'
import BoardIndexItem from './board_index_item'

class BoardIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        let userId = this.props.currentUser.id
        this.props.fetchBoards(userId);
        this.props.fetchBoards();
    }

    render(){
        let { boards, currentUser } = this.props;

        return(
            <div>
                <p id='header'>The Latest Boards</p>
                <div className='board-index-container'>
                  {boards.reverse().map((board) => ( 
                      <BoardIndexItem
                          board={board}
                          key={board.id}
                          currentUserId={currentUser.id}
                        />
                  ))}
              </div>
            </div>
        )
    }
}

export default BoardIndex;