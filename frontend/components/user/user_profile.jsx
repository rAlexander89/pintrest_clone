import React from 'react';
import InlineDisplay from '../inline_display/inline_display_container'
import BoardCreateContainer from '../board/board_create_container'
import PinIndexItem from '../pin/pin_index_item'
import BoardIndexItem from '../board/board_index_item'
import { Link } from 'react-router-dom'


class UserProfile extends React.Component{
    constructor(props){
        super(props)
        this.fetchUserPins = this.fetchUserPins.bind(this)
    }

    componentDidMount(){
        this.props.fetchPins()
        this.props.fetchBoards()
        this.props.fetchUsers()
    }

    fetchUserPins(pins, owner, currentUser){
        let userPins = []
        pins.forEach(pin => {
            if (pin.author_id == this.props.userId){
                userPins.push(pin)
            }
        })

        if (userPins.length === 0) {
            if (currentUser == owner) {
                return (
                    <div>
                        <h1 id='header'> {owner.username}'s Latest Pins:</h1>
                        <p id='snippet'>You don't have any pins! Make some!</p>
                    </div>
                )
            } else {
                return (
                    <div>
                        <h1 id='header'> {owner.username}'s Latest Pins:</h1>
                        <p id='snippet'>They don't have any boards yet!</p>
                    </div>
                )
            }
        } else {
            return (
                <div>
                    <h1 id='header'>{owner.username}'s Latest Pins</h1>
                    <div className="index-container" >
                        {
                            userPins.reverse().map((pin) => (
                                <PinIndexItem
                                    pin={pin}
                                    key={pin.id}
                                    photo={pin.photoUrl}
                                />
                            ))
                        }
                    </div >
                </div>
            )
        }
    }

    displayUserBoards(userBoards, currentUser, userId, owner){
        
        

        if (userBoards.length === 0){
            if ( currentUser == owner){
                return(
                    <div>
                        <h1 id='header'> {owner.username}'s Latest Boards:</h1>
                        <p id='snippet'>You don't have any boards! Make some!</p>
                    </div>
                )
            } else {
                return(
                    <div>
                        <h1 id='header'> {owner.username}'s Latest Boards:</h1>
                        <p id='snippet'>They don't have any boards yet!</p>
                    </div>
                )
            }
        } else {
            return(
                <div>
                    <h1 id='header'> {owner.username}'s Latest Boards:</h1>
                    <div className='profile-display-boards'>
                        {userBoards.reverse().map((userBoard) => (
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

    render(){
        
        let { currentUser, userId, pins, userBoards, owner } = this.props
        if (!pins) return null
        if (owner === undefined) return null

        
        return(
            <div>
                <div>
                    {this.displayUserBoards(userBoards, currentUser, userId, owner)}
                    {this.fetchUserPins(pins, owner, currentUser)}
                </div>
            </div>
        )
    }

}

export default UserProfile

