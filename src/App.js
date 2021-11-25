import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import axios from 'axios';

import './App.css';

class App extends Component {
  //lifecycle method
  //we need to pass the data to user so we need state
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    //change the state
    this.setState({ loading: true });
    const res = await axios.get('https://api.github.com/users');
    console.log(res.data);
    //change the state
    this.setState({ users: res.data, loading: false });
  }

  render() {
    return (
      <div className='App'>
        <Navbar title='Github Finder' icon='fab fa-github' />
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
