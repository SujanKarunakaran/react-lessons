// import React from 'react'

// function ListEx() {
//     var numbers = [1, 2, 3, 4, 5]

//     numbers.map((num) => {
//         console.log(num * 5)
//     })

//     return (
//         <div>
//         </div>
//     )
// }

// export default ListEx

import React from 'react'

function ListEx() {
    var numbers = [1, 2, 3, 4, 5]

    var numList = numbers.map((num) => {
        return(num * 5)
    })

    console.log(numList)
    return (
        <div>
        </div>
    )
}

export default ListEx