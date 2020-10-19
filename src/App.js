import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
    state = {
      persons: [
        { name: 'Vidya', age: 21 },
        { name: 'Neha', age: 221 },
        { name: 'Tanya', age: 20 },
      ]
    }

  switchNameHandler = () => {
    alert(1)
  } 

  render() {
    return (
      <div className="App">
     <h1>Hi, I'm a React App</h1>
     <p>This is really working!</p>
     <button onClick= {this.switchNameHandler.bind(this, 'Darshan Hulswar')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person click={this.switchNameHandler.bind(this, 'Darshan Hulswar Frontend Developer')} name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobby Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
   </div>
    );
  }
}

// const App = props => {

//   // Using useState() Hook
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Vidya', age: 21 },
//       { name: 'Neha', age: 221 },
//       { name: 'Tanya', age: 20 },
//     ],
//     otherState: 'Original Value'
//   })

//   const switchNameHandler = (newName) => {
//     // console.log('Was clicked');
//     //DO NOT DO THIS this.state.persons[0].name = 'Maximillian';
//     setPersonsState({
//       persons: [
//         { name: newName, age: 21 },
//         { name: 'Max', age: 28 },
//         { name: 'Staphanie', age: 27 }
//       ],
//       otherState: 'Some other state'
//     })
//   }

//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App</h1>
//       <p>This is really working!</p>
//       <button onClick= {switchNameHandler.bind(this, 'Darshan Hulswar')}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//       <Person click={switchNameHandler.bind(this, 'Darshan Hulswar Frontend Developer')} name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobby Racing</Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />

//     </div>
//   );
// }

export default App;
