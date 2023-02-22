import React from 'react';

const Decrement = (props) => {
    const {decrementDown} = props

    return(
        <div>
            <button onClick = {decrementDown} className="myButton">Minus One</button>
        </div>
    )
}

export default Decrement