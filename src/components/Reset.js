import React from 'react';

const Reset = (props) => {
    const {reset} = props

    return(
        <div>
            <button onClick={reset} className="myButton">Reset</button>
        </div>
    )
}

export default Reset