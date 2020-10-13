import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';

const App = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Vidya', age: 21 },
      { name: 'Neha', age: 221 },
      { name: 'Tanya', age: 20 },
    ]
  })

  const switchNameHandler = () => {
    // console.log('Was clicked');
    //DO NOT DO THIS this.state.persons[0].name = 'Maximillian';
    setPersonsState({
      persons: [
        { name: 'Darshan', age: 21 },
        { name: 'Max', age: 28 },
        { name: 'Staphanie', age: 27 }
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobby Racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
  // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hello this works now?'))
}

export default App;
