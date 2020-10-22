import React from 'react';
import BoardIndexItem from './board_index_item';


class BoardIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchBoards();
    }

    render(){
        let { boards, currentUserId } = this.props;

        return(
            <div className='board-index-container'>
                {boards.map((board) => (
                    <BoardIndexItem
                        board={board}
                        key={board.id}
                        currentUserId={currentUserId}
                    />
                ))}
            </div>
        )

    }
}