import React, { Component } from 'react';
import { Label } from 'semantic-ui-react';

class User extends Component {
  render() {
    return (
      <div>
        <h2>User Info</h2>
        <Label>email: reallymyname@email.com</Label>
      </div>
    );
  }
}

export default User;