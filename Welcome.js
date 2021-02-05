import React from 'react'



class Welcome extends React.Component {
    render() {
        const {name, villainName} = this.props
        return (
            <div>
                <h3> hiiiii {name} - {villainName}</h3>
                    {this.props.children}
            </div>
        )
    }
}

export default Welcome





// import Hello from "./Hello"

// class Welcome extends React.Component {
//     constructor() {
//         super()
//         this.state = { 
//             name: "React"
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <Hello info={this.state.name}/>
//             </div>
//         )
//     }
// } 

// export default Welcome