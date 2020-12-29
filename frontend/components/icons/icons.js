import React from 'react'

import { linkedIn } from './linkedIn'
import { gitHub } from './gitHub'
import { newPin } from './newPin'
import { newBoard } from './newBoard'
import { angelList } from './angellist'


class Icons extends React.Component{
    constructor(props){
        super(props)
        this.returnIcon = this.returnIcon.bind(this)
    }


    returnIcon(icon){
        switch( icon ){
            case 'newPin':
                return newPin();
            case 'newBoard':
                return newBoard();
            case 'gitHub':
                return gitHub();
            case 'linkedIn':
                return linkedIn();
            case 'angelList':
                return angelList();
            default:
                return 'yo, what icon bruv?';
        }
    }

    render(){
        let { icon } = this.props
        
        return(
            this.returnIcon(icon)
        )
    }
}


export default Icons