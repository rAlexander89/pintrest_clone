import React from 'react';
import { Link } from 'react-router-dom';

class BoardIndexItem extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        let { board } = this.props;

        return(
                <Link to={`/users/${board.author_id}/boards/${board.id}`}>
            <div className='board-index-item' >
                <ul>
                <li><h1 id='board-card-title'>{board.title}</h1></li>
                <li><p id='board-card-description'>{board.description}</p></li>
                </ul>
            </div>
                </Link>
        )
    }
}

export default BoardIndexItem