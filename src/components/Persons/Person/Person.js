import React, { Component } from 'react'
import personStyle from './Person.module.css';

export class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <div className={personStyle.Person}>
                <p onClick={this.props.click}>Hello I'm {this.props.name} and I'm {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changeName} value={this.props.name} />
            </div>
        )
    }
}

export default Person