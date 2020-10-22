import React from 'react'

function UserInput(props) {

    const style = {
        display: "block",
        width: '15rem',
        margin: '2rem auto',
        padding: '1rem',
        color: '#ccc'
    }

    const inpuctStyle = {
        boxSizing: 'border-box',
        fontSize: '1rem',
        width: '100%',
        height: '2rem',
        padding: '1rem',
        color: '#234',
        fontWeight: 'bolder'
    }

    return (
        <div style={style}>
            <input style={inpuctStyle} type="text" value={props.userName} onChange={props.changeName} />
        </div>
    )
}

export default UserInput
