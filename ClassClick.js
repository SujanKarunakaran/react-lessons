import React from 'react'

class ClassClick extends React.Component {

    clickHandler() {
        console.log("Clicked button on")
    }
    render() {
        return (
            <div>
               <button onClick={this.clickHandler}>Click This</button> 
            </div>
        )
    }
}

export default ClassClick