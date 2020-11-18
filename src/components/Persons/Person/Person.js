import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';

// import Aux from '../../../hoc/Auxiliary';
// import personStyle from './Person.module.css';

export class Person extends Component {

    componentDidMount() {
        this.inputElement.focus()
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            <Fragment>
                <p onClick={this.props.click}>Hello I'm {this.props.name} and I'm {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input
                    ref={(inpEl) => { this.inputElement = inpEl }}
                    type="text"
                    onChange={this.props.changeName}
                    value={this.props.name} />
            </Fragment>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
}

export default Person