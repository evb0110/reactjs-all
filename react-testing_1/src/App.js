import React, { Component } from 'react';
import './App.css';
import Part from './Part/Part';
import Button from './Button/Button';
import Input from './Input/Input';

class App extends Component {
  render() {
    return (
      <div className="App">
        <b> Simplest React app</b>

        <Part name="James" />
        <Button text="Change name" />
        <Input />
      </div>
    );
  }
}

export default App;
