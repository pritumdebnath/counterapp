import React from 'react';

const Increment = (props) => {
    const {incrementUp} = props

    return(
        <div>
            <button onClick = {incrementUp}>Plus One</button>
        </div>
    )
}

export default Increment