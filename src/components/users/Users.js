import React, { Component } from 'react';
import UserItem from './UserItem';
//bring in static data inside the class
//populate the component

class Users extends Component {
  render() {
    return (
      <div style={userStyle}>
        {this.props.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}
//css like styling
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridgap: '1rem',
};

export default Users;
