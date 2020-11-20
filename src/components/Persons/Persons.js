import React, { PureComponent } from 'react';
import Person from './Person/Person';

export class Persons extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changeName={(event) => this.props.changed(event, person.id)}
                />
            )
        })
    }
}


export default Persons