import React, { Component } from 'react'

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    // increaseCount(){
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }

    increaseCount(){
        this.setState((prevState) => ({
            count: prevState.count + 1
        }
        ), () => {
            console.log('callback value = ', this.state.count)
        })
        
    }

    increaseCountByFive() {
        this.increaseCount()
        this.increaseCount()
        this.increaseCount()
        this.increaseCount()
        this.increaseCount()
        
    }

    // render() {
    //     return (
    //         <div>
    //             <h1>Count - {this.state.count}</h1>
    //             <button onClick={() => this.increaseCount()}>Add one</button>
    //         </div>
    //     )
    // }

    render() {
        return (
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick={() => this.increaseCountByFive()}>Add Five</button>
            </div>
        )
    }
}
export default Counter