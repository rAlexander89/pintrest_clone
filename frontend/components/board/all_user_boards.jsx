import React from 'react';

class AllUserBoards extends React.Component{
    constructor(props){
        super(props)
        // this.fetchAllBoards = this.fetchAllBoards.bind(this)
    }

    componentDidMount(){
        this.props.fetchAllUsers();
    }

    // fetchAllBoards(userIds){
    //     debugger
    //     if (userIds === null) return null
    //     let allBoards = []
    //     debugger
        

    // }



    render(){
        let { users, userIds } = this.props
        if (Object.values(users).length <= 1) return null
        if (userIds === null) return null
        this.props.allBoards(userIds)
        // this.fetchAllBoards(this.props.userIds)
        // debugger
        // debugger
        return(
            <div>This is where all the boards will go</div>
        )
    }

}

export default AllUserBoards