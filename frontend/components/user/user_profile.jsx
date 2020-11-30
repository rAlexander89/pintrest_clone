import React from 'react';
import InlineDisplay from '../inline_display/inline_display_container'
import BoardCreateContainer from '../board/board_create_container'
import PinIndexItem from '../pin/pin_index_item'

class UserProfile extends React.Component{
    constructor(props){
        super(props)
        this.fetchUserPins = this.fetchUserPins.bind(this)
    }

    componentDidMount(){
        this.props.fetchPins()
    }

    fetchUserPins(pins){
        let userPins = []
        pins.forEach(pin => {
            if (pin.author_id == this.props.userId){
                userPins.push(pin)
            }
        })
        debugger

        return(
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
        )

    }

    displayBoardCreate(userId, currentUserId){
        if (userId == currentUserId){
            return(
                <BoardCreateContainer currentUserId={currentUserId} />
            )
        }
    }


    render(){
        let { currentUserId, userId, pins } = this.props
        if (this.props.pins.length === 0) return null
        this.fetchUserPins(pins)
        return(
            <div>
                <div>
                    {this.displayBoardCreate(userId, currentUserId)}
                    {this.fetchUserPins(pins)}

                </div>

            </div>
        )
    }

}

export default UserProfile