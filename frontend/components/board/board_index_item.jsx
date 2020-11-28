import React from 'react';
import { Link } from 'react-router-dom';

class BoardIndexItem extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        
    }

    render(){
        let { board } = this.props;

        return(
            <div className='board-index-item'>
                <ul>
                <Link to={`/users/${board.author_id}/boards/${board.id}`}>
                <li><h1 id='board-card-title'>{board.name}</h1></li>
                <li><p id='board-card-description'>{board.description}</p></li>
                </Link>
                </ul>
            </div>
        )
    }
}

export default BoardIndexItem