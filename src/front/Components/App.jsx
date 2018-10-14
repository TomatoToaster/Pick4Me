import React, { Component } from 'react';
import {
  Route,
  BrowserRouter
} from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Home from './Home.jsx';
import Questions from './Questions.jsx';
import User from './User.jsx';
import Header from './Header.jsx';

/**
 * Fake Authentication object
 */
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}


/**
 * Container for the Single Page Application.
 * Routes the whole thing to each page
 */
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <h1>Welcome to Pick For Me!</h1>
          <Header />
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/questions" component={Questions}/>
            <Route path="/user" component={User}/>
          </div>
        </Container>
      </BrowserRouter>
    );
  }
}
export default App;