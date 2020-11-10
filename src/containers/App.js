import React, { Component } from "react";
import Persons from "../components/Persons/Persons";
import Cockpit from '../components/Cockpit/Cockpit'
import appStyles from "./App.module.css";

class App extends Component {

  constructor(props) {
    super(props);

    console.log('[App.js] constructor');
    this.state = {
      persons: [
        { id: 'asdf1', name: "Vidya", age: 21 },
        { id: 'qwer2', name: "Neha", age: 21 },
        { id: 'zxcv3', name: "Tanya", age: 20 },
      ],
      showPersons: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps ', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }


  updateNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;
    this.setState({ persons: persons });
  }

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);

    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.updateNameHandler}
          />
        </div>
      );
    }


    return (
      <div className={appStyles.App}>
        <Cockpit
          title={this.props.appTitle}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          togglePersonsHandler={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );

  }
}

export default App;