import React from 'react';
// import BoardIndexItem from './board_index_item';
import BoardCreateContainer from './board_create_container'


class BoardIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        // debugger
        // this.props.fetchBoards(this.props.currentUser.id);
        // debugger
    }

    render(){
        let { boards, currentUser } = this.props;
        console.log('we are now in the board_index')
        debugger
        return(
            <div>
                <BoardCreateContainer currentUserId={currentUser.id}/>
                <p>howdy partner! This is where I'm gonna put down some cool boards, I'll tell you hwut!</p>
                <div className='board-index-container'>
                  {/* {boards.map((board) => (
                      <BoardIndexItem
                          board={board}
                          key={board.id}
                          currentUserId={currentUserId}
                      
                  ))}  */}
              </div> 
            </div>
              )
    }
}

export default BoardIndex;