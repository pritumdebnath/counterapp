import React from 'react';

const Decrement = (props) => {
    const {decrementDown} = props

    return(
        <div>
            <button onClick = {decrementDown}>Minus One</button>
        </div>
    )
}

export default Decrement