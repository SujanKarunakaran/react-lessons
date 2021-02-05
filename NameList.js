// import React from 'react'

// function NameList() {
//     const names = ['Cruce', 'Sujan', 'Diana']

//     return (
//         <div>
//             {
//                 names.map((name) => <h1>{name}</h1>)
//             }
//         </div>
//     )
// }

// export default NameList


// import React from 'react'

// function NameList() {

//     const names = ['Bruce', 'Sujan', 'Kamal']
//     const nameList = names.map((name) => <h1>{name}</h1>)

//     return(
//         <div>
//             {nameList}
//         </div>
//     )
// }

// export default NameList

import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Sujan',
            age: 30,
            skill: 'read'
        },
        {
            id:2,
            name: 'Kamal',
            age: 32,
            skill: 'play',
        },
        {
            id:3,
            name: 'Mala',
            age: 22,
            skill: 'jump',
        }
    ]
    const personList = persons.map((person) => <Person personDetails={person}/>)

    return <div>{personList}</div>

}

export default NameList