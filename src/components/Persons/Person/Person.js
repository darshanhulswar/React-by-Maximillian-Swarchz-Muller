import React from 'react';
import personStyle from './Person.module.css';

const person = (props) => {
    console.log('[Person.js] rendering...');
    return (
        <div className={personStyle.Person}>
            <p onClick={props.click}>Hello I'm {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changeName} value={props.name} />
        </div>
    );

}
export default person;