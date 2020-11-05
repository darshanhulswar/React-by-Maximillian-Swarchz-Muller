import React, { Component } from "react";
import Persons from "../components/Persons/Persons";
import appStyles from "./App.module.css";

class App extends Component {
  state = {
    persons: [
      { id: 'asdf1', name: "Vidya", age: 21 },
      { id: 'qwer2', name: "Neha", age: 21 },
      { id: 'zxcv3', name: "Tanya", age: 20 },
    ],
    showPersons: false
  };

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
    let persons = null;
    let btnClass = appStyles.btn;

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
      btnClass = appStyles.btnDanger;
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(appStyles.red);
    }

    if (this.state.persons.length <= 1) {
      classes.push(appStyles.bold);
    }

    return (
      <div className={appStyles.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </button>
        {persons}
      </div>
    );

  }
}

export default App;