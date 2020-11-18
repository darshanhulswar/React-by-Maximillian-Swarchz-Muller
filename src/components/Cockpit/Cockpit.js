import React, { useEffect, useRef } from 'react'
import CockpitClasses from './Cockpit.module.css'

const Cockpit = props => {

    const toggleBtnRef = useRef(null);

    const classes = [];
    let btnClass = CockpitClasses.btn

    if (props.showPersons) {
        btnClass = CockpitClasses.btnDanger
    }

    if (props.personsLength <= 2) {
        classes.push(CockpitClasses.red);
    }

    if (props.personsLength <= 1) {
        classes.push(CockpitClasses.bold);
    }

    useEffect(() => {
        console.log('[Cockpit.js] useEffect in Cockpit');
        setTimeout(() => {
            console.log('Button clicked with the help of Ref')
            toggleBtnRef.current.click()
        }, 2000)
    }, [])

    return (
        <div className={CockpitClasses.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.togglePersonsHandler}
            >
                Toggle Persons
        </button>
        </div>
    )
}

export default React.memo(Cockpit)
