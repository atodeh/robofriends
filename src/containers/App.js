import React from 'react';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props) //calls constructor of Component
    this.state= {
      robots: [],
      searchField: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value})
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
    }

  render() {
    const filteredRobots = this.state.robots.filter(item => {
      return item.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
    return (
    <div className='tc'>
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={this.onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
  } 
}

export default App;      