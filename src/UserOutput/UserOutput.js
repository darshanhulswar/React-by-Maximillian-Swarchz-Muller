import React from 'react'
import './UserOutput.css'

function UserOutput(props) {
    return (
        <div className="UserOutput">
            <p>{props.userName} </p>
            <p>Amazing React Component...!</p>
        </div>
    )
}

export default UserOutput
