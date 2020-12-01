import React from 'react';
import InlineDisplay from '../inline_display/inline_display_container'
import BoardCreateContainer from '../board/board_create_container'
import PinIndexItem from '../pin/pin_index_item'
import BoardIndexItem from '../board/board_index_item'
import UserBoardContainer from '../user/user_profile_container'

class UserProfile extends React.Component{
    constructor(props){
        super(props)
        this.fetchUserPins = this.fetchUserPins.bind(this)
        this.displayUserBoards = this.displayUserBoards.bind(this)
    }

    componentDidMount(){
        this.props.fetchPins()
        this.props.fetchBoards()
    }

    fetchUserPins(pins){
        let userPins = []
        pins.forEach(pin => {
            if (pin.author_id == this.props.userId){
                userPins.push(pin)
            }
        })

        return(
            <div>
                < div className = "index-container" >
                {
                    userPins.map((pin) => (
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

    displayBoardCreate(userId, currentUser){
        if (userId == currentUser.id){
            return(
                <BoardCreateContainer currentUserId={currentUser.id} />
            )
        }
    }

    displayUserBoards(userBoards, userId){
        debugger
        return(
            userBoards.map((userBoard) => (
                        <BoardIndexItem
                            board={userBoard}
                            key={userBoard.id}
                            currentUserId={userId}
                        />
            ))
        )
    }

    render(){
        let { currentUser, userId, pins, userBoards } = this.props
        if (this.props.pins.length === 0) return null
        if (userBoards === null) return null
        debugger
        return(
            <div>
                <div>
                    {this.displayBoardCreate(userId, currentUser)}
                    {this.displayUserBoards(userBoards, userId)}
                    {this.fetchUserPins(pins)}

                </div>

            </div>
        )
    }

}

export default UserProfile

