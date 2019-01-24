import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import Friends from './Friends';
import FriendForm from './FriendForm';
import './App.css';


const baseUrl = 'http://localhost:5000/friends';

const clearedFriend = {
  name: '',
  age: '',
  email: ''
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      friend: clearedFriend,
    };
  }

  componentDidMount() {
    axios
      .get(`${baseUrl}`)
      .then(res => {
        console.log(res);
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  };

  handleChanges = e => {
    e.persist();
    this.setState(prevState => {
      return {
        friend: {
          ...prevState.friend,
          [e.target.name]: e.target.value
        }
      }
    })
  }

  addFriend = () => {
    axios
      .post(`${baseUrl}/`, this.state.friend)
      .then(res => {
        this.setState({ friends: res.data });
        this.props.history.push('/add-friend')
      })
      .catch(err => console.log(err));
  }

  populateForm = (e, id) => {
    e.preventDefault();
    this.setState({
      friend: this.state.friends.find(friend => friend.id === id),
      
    });
    this.props.history.push('/add-friend')
  }


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
          <FriendForm 
            {...props} 
            addFriend={this.addFriend}
            refresh={this.updateState} 
            handleChanges={this.handleChanges}
            />
        )}
      />
      
      </div>
    );
  }
}

export default App;
