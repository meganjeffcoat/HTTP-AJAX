import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        console.log(res);
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className='App'>
      <h1>Friends</h1>
      {this.state.friends.map(friend => (
        <div key={friend.id}>
          <h2>{friend.name}</h2>
          <h3>{friend.age}</h3>
          <h3>{friend.email}</h3>
        </div>
      ))}
      </div>
    );
  }
}

export default App;
