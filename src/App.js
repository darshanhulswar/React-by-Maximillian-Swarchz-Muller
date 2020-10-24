import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { name: "Vidya", age: 21 },
      { name: "Neha", age: 21 },
      { name: "Tanya", age: 20 },
    ],
    showPersons: false
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "Darshan", age: 21 },
        { name: "Max", age: 28 },
        { name: "Staphanie", age: 27 },
      ],
      otherState: "Original Value",
    });
  }

  updateNameHandler = event => {
    this.setState({
      persons: [
        { name: "Darshan", age: 21 },
        { name: event.target.value, age: 28 },
        { name: "Staphanie", age: 27 },
      ],
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: '#ccc',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />

          <Person
            click={this.switchNameHandler.bind(
              this,
              "Darshan Hulswar Frontend Developer"
            )}
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changeName={this.updateNameHandler}
          >
            My Hobby Racing
          </Person>

          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
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