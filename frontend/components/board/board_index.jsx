import React from 'react';
import BoardIndexItem from './board_index_item';
// import BoardIndexItem from './board_index_item';
import BoardCreateContainer from './board_create_container'


class BoardIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        // this.props.fetchBoards();
    }

    render(){
        let { boards, currentUserId } = this.props;
        console.log('we are now in the board_index')
        debugger
        return(
            <div>
                <BoardCreateContainer/>
                <p>howdy partner! This is where I'm gonna put down some cool boards, I'll tell you hwut!</p>
            </div>
              )
              {/* <div className='board-index-container'>
                {boards.map((board) => (
                    <BoardIndexItem
                        board={board}
                        key={board.id}
                        currentUserId={currentUserId}
                    
                ))} 
            </div> */}

    }
}

export default BoardIndex;