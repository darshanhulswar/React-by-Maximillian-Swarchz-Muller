import React from 'react';
import Person from './Person/Person';
import './App.css';

class App extends React.Component {

  state = {
    persons: [
      { name: 'Darshan', age: 21 },
      { name: 'Max', age: 28 },
      { name: 'Staphanie', age: 27 }
    ]
  }

  switchNameHandler = () => {
    // console.log('Was clicked');
    //DO NOT DO THIS this.state.persons[0].name = 'Maximillian';
    this.setState({
      persons: [
        { name: 'Vidya', age: 21 },
        { name: 'Neha', age: 221 },
        { name: 'Tanya', age: 20 },
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobby Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />

      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hello this works now?'))
  }
}

export default App;
