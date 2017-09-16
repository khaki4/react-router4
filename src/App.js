import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

const Links = () =>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/test/:token">test</Link>
  </nav>

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Links />
          <Switch>
            <Route exact path="/" render={() => <h1>Home</h1>} />
            <Route path="/about" render={() => <h1>About</h1>} />
            <Route path="/contact" render={() => <h1>Contact</h1>} />
            <Route path="/test/:token"
                   render={({ match }) => <h1>Test: {match.params.token}</h1>} />
            <Route path="/:itemid"
                   render={({ match }) => <h1>Item: {match.params.itemid}</h1>} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
