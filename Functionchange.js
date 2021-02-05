import React, { Component } from 'react'

class FunctionChange extends Component {
    constructor() {
        super() 
        this.state = {
            companyName: ' '
        }
    }

    changeText = (ele) => {
        this.setState({
            companyName: ele.target.value
        })
    }

    render() {
        return (
            <div>
                <label htmlFor="'companyName'">Enter company name: </label>
                <input id='companyName' onChange={this.changeText}/>
                    <h3>You entered: {this.state.companyName}</h3>
            </div>
        )
    }
}

export default FunctionChange