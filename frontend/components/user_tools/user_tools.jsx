import React from 'react';
import Icons from '../icons/icons'
import {Link} from 'react-router-dom'

class UserTools extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            show: false,
        }
        this.createOptions = this.createOptions.bind(this)
        this.modalFunc = this.modalFunc.bind(this)
        this.reveal = this.reveal.bind(this)
        this.collapse = this.collapse.bind(this)
        this.noSession = this.noSession.bind(this)
    }
    
    modalFunc(props, show){
        let modalObject = {
            type: props
        }
        this.props.openModal(modalObject)
        this.setState({ show: !show })
    }

    reveal(show){
        return(
            <div className='user-tools'>
                <div className='user-tools-item' id='shift-reveal'>
                    <a href='https://github.com/rAlexander89/pintrest_clone' target ='_blank'>
                        <Icons icon={'gitHub'}/>
                    </a>
                </div>
                <div className='user-tools-item' id='shift-reveal'>
                    <a href='https://angel.co/u/ryan-alexander-acosta-1' target ='_blank'>
                        <Icons icon={'angelList'}/>
                    </a>
                </div>
                <div className='user-tools-item' id='shift-reveal'>
                    <a href="https://www.linkedin.com/in/ryan-acosta-1aa428198/" target="_blank">
                    <Icons icon={'linkedIn'}/>
                    </a>
                </div>
        
                {/* <div className='user-tools-item' id='reveal' onClick={() => this.modalFunc('pin', show)}> */}
                <div className='user-tools-item' id='reveal'>
                    <Link to='/p/create'>
                        <Icons icon={'newPin'}/>
                    </Link>
                </div>

                {/* <div className='user-tools-item' id='reveal' onClick={() => this.modalFunc('board', show)}> */}
                <div className='user-tools-item' id='reveal'>
                    <Link to='/b/create'>
                        <Icons icon={'newBoard'}/>
                    </Link>
                </div>
                    <div className='user-tools-item' onClick={() => this.setState({ show: !show })}>
                        <svg xmlns="http://www.w3.org/2000/svg" className='r45'
                            width="3.5em" height="3.5em" viewBox="0 0 32 32"><path d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z" fill="#2d2d2d" /></svg>
                    </div>
            </div>
        )
    }

    collapse(show){
        return (
            <div className='user-tools'>
                <div className='user-tools-item' id='shift'>
                    <a href='https://github.com/rAlexander89/pintrest_clone' target ='_blank'>
                    <Icons icon={'gitHub'}/>
                    </a>
                </div>
                <div className='user-tools-item' id='shift'>
                    <a href='https://angel.co/u/ryan-alexander-acosta-1' target ='_blank'>
                        <Icons icon={'angelList'}/>
                    </a>
                </div>
                <div className='user-tools-item' id='shift'>
                    <a href="https://www.linkedin.com/in/ryan-acosta-1aa428198/" target="_blank">
                        <Icons icon={'linkedIn'}/>
                    </a>
                </div>

                <div className='user-tools-item' id='hidden' onClick={() => this.modeFunc('pin')}>
                    <Icons icon={'newPin'}/>
                </div>
                <div className='user-tools-item' id='hidden' onClick={() => this.modeFunc('pin')}>
                    <Icons icon='newBoard'/>
                </div>
                    <div className='user-tools-item' onClick={() => this.setState({ show: !show })}>
                        <svg xmlns="http://www.w3.org/2000/svg" className='r90' 
                            width="3.5em" height="3.5em" viewBox="0 0 32 32"><path d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z" fill="#2d2d2d" /></svg>
                    </div>
            </div>  
        )  
    }

    noSession(){
        return(
            <div className='user-tools'>
                    <div className='user-tools-item' id='shift-reveal'>
                        <a href='https://github.com/rAlexander89/pintrest_clone' target ='_blank'>
                            <Icons icon={'gitHub'}/>
                        </a>
                    </div>
                    <div className='user-tools-item' id='shift-reveal'>
                        <a href='https://angel.co/u/ryan-alexander-acosta-1' target ='_blank'>
                            <Icons icon={'angelList'}/>
                        </a>
                    </div>
                    <div className='user-tools-item' id='shift-reveal'>
                        <a href="https://www.linkedin.com/in/ryan-acosta-1aa428198/" target="_blank">
                        <Icons icon={'linkedIn'}/>
                        </a>
                    </div>
            </div>
        )
    }
    
    createOptions(show){
        let { session } = this.props

         if (session === null){
             return(
                 this.noSession()
             )
         } else{
            if (show){
                return(
                    this.reveal(show)
                )
            } else {
                return(
                    this.collapse(show)
                )
            }
        }
        } 

    render(){
        let { show } = this.state
        
        return(
            this.createOptions(show)
        )
    }
}

export default UserTools