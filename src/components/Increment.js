import React from 'react';

const Increment = (props) => {
    const {incrementUp} = props

    return(
        <div>
            <button onClick = {incrementUp} className="myButton">Plus One</button>
        </div>
    )
}

export default Increment