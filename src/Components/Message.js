import React, { Component } from 'react'



class Message extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            message: 'Welcome visitor'
            // Define state variables
        }
    }
    
    
    
    changeMessage() {
        this.setState({
            message: 'Thank you for subscribing'
        })
        // Change state variables
    }
    
    
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}


export default Message