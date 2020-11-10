import React, { useEffect } from 'react'
import CockpitClasses from './Cockpit.module.css'

const Cockpit = props => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');

        // HTTP Request
        setTimeout(() => {
            alert('Saved data to cloud!')
        }, 1000)
        return () => {
            console.log('[Cockpit.js] clean up work n useEffect');
        }
    }, [])
    // use an empty array as an argument to useEffect like this useEffect(function, [])

    const classes = [];
    let btnClass = CockpitClasses.btn

    if (props.showPersons) {
        btnClass = CockpitClasses.btnDanger
    }

    if (props.persons.length <= 2) {
        classes.push(CockpitClasses.red);
    }

    if (props.persons.length <= 1) {
        classes.push(CockpitClasses.bold);
    }

    return (
        <div className={CockpitClasses.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.togglePersonsHandler}
            >
                Toggle Persons
        </button>
        </div>
    )
}

export default Cockpit
