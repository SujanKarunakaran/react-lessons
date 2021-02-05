import React from 'react'

class Message extends React.Component {
    constructor() {
        super()
        this.state = {
            message : 'Welcome guest'
        }
    }


    changeMessage(){
        this.setState({
            message:'How can I help you?'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Help</button>
            </div>
        )
    }
}
export default Message