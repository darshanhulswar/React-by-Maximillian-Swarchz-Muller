import React, { Component, Fragment } from 'react'
// import Aux from '../../../hoc/Auxiliary';
// import personStyle from './Person.module.css';

export class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <Fragment>
                <p onClick={this.props.click}>Hello I'm {this.props.name} and I'm {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changeName} value={this.props.name} />
            </Fragment>
        )
    }
}

export default Person