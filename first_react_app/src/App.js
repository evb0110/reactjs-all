import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import './Person/Person.css';


class App extends Component {
  state = {
    persons: [
      { id: 'adsf', name: 'Max', age: 28 },
      { id: 'adfd', name: 'Manu', age: 29},
      { id: 'a123', name: 'Stephanie', age: 26}
    ],
    showPersons: true
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  toggleShowPersons = () => {
    let shown = this.state.showPersons;
    this.setState({
      showPersons: !shown
    })
  }


  render() {

    let persons = null;
    let btnClass = '';


    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) =>
            <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          )}
        </div>
      );
      btnClass = classes.Red;
    }


    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push( classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push( classes.bold )
    }
    if (this.state.persons.length < 1) {
      assignedClasses.push( classes.large )
    }

    return (
      <div className={classes.App}>
        <h1>Hello World!</h1>
        <p>I'm a really nice React app</p>
        <h2>This is a beautiful framework</h2>
        <p>This is also very smart</p>
        <button
          className = {btnClass}
          onClick={() => this.toggleShowPersons()}>Toggle Show Names</button>

        {persons}
      </div>
    );
  }
}

export default App;
