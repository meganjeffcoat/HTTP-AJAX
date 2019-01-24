import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import Friends from './Friends';
import FriendForm from './FriendForm';
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
      <Route 
        exact path='/'
        render={props => (
          <Friends {...props} friends={this.state.friends} />
        )}
      />
      <Route 
        path='/add-friend'
        render={props => (
          <FriendForm {...props} refresh={this.updateState} />
        )}
      />
      
      </div>
    );
  }
}

export default App;
