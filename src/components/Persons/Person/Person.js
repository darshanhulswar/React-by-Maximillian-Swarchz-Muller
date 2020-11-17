import React, { Component } from 'react'
import Auxiliary from '../../../hoc/Auxiliary'
import WithClass from '../../../hoc/WithClass'
import classes from './Person.module.css';

export class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <Auxiliary>
                <p onClick={this.props.click}>Hello I'm {this.props.name} and I'm {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changeName} value={this.props.name} />
            </Auxiliary>
        )
    }
}

export default WithClass(Person, classes.Person)