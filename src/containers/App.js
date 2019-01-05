import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
import { connect } from 'react-redux';
import { setSearchField, requestRobotsAction } from '../actions';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,

    robots: state.requestRobotsReducer.robots,
    isPending: state.requestRobotsReducer.isPending,
    error: state.requestRobotsReducer.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) =>  dispatch(setSearchField(event.target.value)),
    onRobotsRequest: () => requestRobotsAction(dispatch)
  }
}


class App extends Component {

  componentDidMount() {
    this.props.onRobotsRequest()
  }

  render() {
    const { searchField, onSearchChange, isPending, robots, error } = this.props
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPending || error ? <h1 className='tc pa4'>Loading...</h1>
    : (
      <div className="tc">
        <h1>
          ROBOFRIENDS
        </h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots}/>
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
