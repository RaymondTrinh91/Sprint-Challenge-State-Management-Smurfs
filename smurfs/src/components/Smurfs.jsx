import React from 'react'

const Smurfs = (props) => {
    console.log('smurfs', props)
const {name, age, height} = props.item
    return (
        <div>
            <h3>{name}</h3>
            <h6>Age: {age}</h6>
            <p>Height: {height}</p>
        </div>
    )
} 

export default Smurfs