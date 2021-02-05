import React from 'react'
import Car from './Car'

class Garage extends React.Component {
    render() {
        const car = {name: "Ford", model: "mustang"}
        console.log(this.props)
        return (
            <div>
                <h1>This is a Garage</h1>
                <Car carinfo={car}/>
            </div>
        )
    }
}

export default Garage