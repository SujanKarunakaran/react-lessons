import React from "react"

// const Greet = (props) => {
//     return (
//         <div>
//             <h1> Hiii {props.name} - {props.villainName}</h1>
//             {props.children}
//         </div>
//     )
// }

const Greet = (props) => {
    const {name , villainName} = props
    return (
        <div>
            <h1> Hiii {villainName} - {name}</h1>
            {props.children}
        </div>
    )
}

// const Greet = ({name, villainName}) => {
//     return (
//         <div>
//             <h1> Hiii {name} - {villainName}</h1>
//             {props.children}
//         </div>
//     )
// }

export default Greet