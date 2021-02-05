import React from 'react'
import Message from './Message'

class EventBind extends React.Component {
    constructor() {
        super()
        this.state = {
            message: 'hiii'
        }
        // this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler = () => {
        this.setState({
            message: 'Welcome'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={() => this.clickHandler()}>Click this</button> */}
                <button onClick={this.clickHandler}>Click this</button>
            </div>
        )
    }
}

export default EventBind