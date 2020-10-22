import React from 'react';
import { Link } from 'react-router-dom';

class BoardIndexItem extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        let { board } = this.props;

        return(
            <div className='board-index-item'>
                <ul>
                <Link to={`/users/${board.userId}/boards/${board.id}`}>
                <li>{/*a photo from the board will go here*/}</li>
                <li><h id='board-card-title'>{board.name}</h></li>
                <li><p id='board-card-description'>{board.description}</p></li>
                </Link>
                </ul>
            </div>
        )
    }





}