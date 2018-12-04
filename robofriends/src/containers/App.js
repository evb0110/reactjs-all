import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from './Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import { setSearchField, requestRobots } from '../actions';
import { requestRobots } from '../reducers';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requesRobots.robots,
    isPending: state.requesRobots.isPending,
    error: state.requesRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
    }
  }

  componentDidMount() {
     fetch('https://jsonplaceholder.typicode.com/users')
      .then(responce => responce.json())
      .then(users => this.setState({ robots: users, }));
  }

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase()
        .includes(searchField.toLowerCase());
    });
    return !robots.length ?
      <h2>Loading</h2> :
      (
        <div className='tc'>
          <h1 className='f2'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);