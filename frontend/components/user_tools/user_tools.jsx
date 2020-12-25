import React from 'react';
import Icons from '../icons/icons'

class UserTools extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            show: false,
        }
        this.createOptions = this.createOptions.bind(this)
        this.modalFunc = this.modalFunc.bind(this)
    }
    
    modalFunc(props){
        let modalObject = {
            type: props
        }
        this.props.openModal(modalObject)
    }
    
    createOptions(show){
        if (show){
            return(
                <div className='user-tools'>
                    <div className='user-tools-item' id='shift-reveal'>
                        <a href='https://github.com/rAlexander89/pintrest_clone' target ='_blank'>
                             <Icons icon={'gitHub'}/>
                        </a>
                    </div>
                    <div className='user-tools-item' id='shift-reveal'>
                        <a href="https://www.linkedin.com/in/ryan-acosta-1aa428198/" target="_blank">
                          <Icons icon={'linkedIn'}/>
                        </a>
                    </div>
            
                    <div className='user-tools-item' id='reveal' onClick={() => this.modalFunc('pin')}>
                        <Icons icon={'newPin'}/>
                    </div>

                    <div className='user-tools-item' id='reveal' onClick={() => this.modalFunc('board')}>
                            <Icons icon={'newBoard'}/>
                    </div>

                        <div className='user-tools-item' onClick={() => this.setState({ show: !show })}>
                            <svg xmlns="http://www.w3.org/2000/svg" className='r45'
                                width="3.5em" height="3.5em" viewBox="0 0 32 32"><path d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z" fill="#2d2d2d" /></svg>
                        </div>
                </div>
            )
        } else {
            return (
                <div className='user-tools'>
                    <div className='user-tools-item' id='shift'>
                        <a href='https://github.com/rAlexander89/pintrest_clone' target ='_blank'>
                         <Icons icon={'gitHub'}/>
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
    }

    render(){
        let { show } = this.state
        
        return(
            this.createOptions(show)
        )
    }
}

export default UserTools