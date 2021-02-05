// import React from 'react'
// import Bike from './Bike'

// class Car extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h2> From Car Component</h2>
//                 <Bike/>
//             </div>
//         )
//     }
// }

// export default Car


import React from 'react'

class Car extends React.Component {
    render() {
      console.log(this.props)
        return (
            <div>
                <h2>This is {this.props.carinfo.model} - {this.props.carinfo.name}</h2>
            </div>
        )
    }
}

export default Car

