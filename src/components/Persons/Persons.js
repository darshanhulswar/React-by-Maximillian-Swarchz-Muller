import React, { PureComponent } from 'react'
import Person from './Person/Person'

export class Persons extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] getDerivedStateFromProps')
        return null
    }

    componentWillUnmount() {
        console.log('[Persons.js] co mponentWillUnmount');
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if (nextProps.persons !== this.props.persons ||
    //         nextProps.clicked !== this.props.clicked ||
    //         nextProps.changed !== this.props.changed) {
    //         return true
    //     } else {
    //         return false
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'update' }
    }

    render() {
        console.log('[Persons.js] render');
        return (
            this.props.persons.map((person, index) => {
                return <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changeName={(event) => this.props.changed(event, person.id)} />
            })
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }
}

export default Persons