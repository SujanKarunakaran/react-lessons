const Person = ({personDetails}) => {

    return(
        <div>
            <h2>I'm {personDetails.name}. {personDetails.age} years old. I can {personDetails.skill}</h2>
        </div>
    )
}

export default Person