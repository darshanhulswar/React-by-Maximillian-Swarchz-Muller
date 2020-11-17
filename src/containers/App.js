import React, { Component } from "react";
import Persons from "../components/Persons/Persons";
import Cockpit from '../components/Cockpit/Cockpit';
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
      showPersons: false,
      showCockpit: true,
      changeCounter: 0
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[App.js] getSnapShotBeforeUpdate');
    return null
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true
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
        <button onClick={() => { this.setState({ showCockpit: false }) }}>Remove Cockpit</button>
        {
          (this.state.showCockpit) ? <Cockpit
            title={this.props.appTitle}
            personsLength={this.state.persons.length}
            showPersons={this.state.showPersons}
            togglePersonsHandler={this.togglePersonsHandler}
          /> : null
        }
        {persons}
      </div>
    );

  }
}

export default App;