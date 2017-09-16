import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Prompt } from 'react-router-dom';
import './App.css';

const Links = () =>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/form">Form</Link>
  </nav>

const Home = () => (<h1>Home</h1>)
class Form extends Component {
  state = {
    dirty: false
  }
  setDirty = () => this.setState({ dirty: true })
  
  render() {
    return (
      <div>
        <h1>Form</h1>
        <input type="text" onInput={this.setDirty}/>
        <Prompt
          when={this.state.dirty}
          message="Data will be lost!"
        />
      </div>
    )
  }
}
const App = (props) =>(
  <Router>
    <div>
      <Links />
      <Switch>
        <Route exact path="/" render={Home} />
        <Route
          path="/form"
          component={Form}/>
      </Switch>
    </div>
  </Router>
)

export default App;
