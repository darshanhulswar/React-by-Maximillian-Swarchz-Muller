import React from 'react'

function WithClass(WrappedComponent, classes) {
    console.log(classes)
    return (props) => (
        <div className={classes}>
            <WrappedComponent {...props} />
        </div>
    )
}

export default WithClass
