import React, { Component } from 'react';
import {
  BrowserRouter,
  HashRouter,
  MemoryRouter,
  StaticRouter,
  Link,
  Route,
} from 'react-router-dom';
import './App.css';

const LinksRouters = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Route exact path="/" render={() => <h1>Home</h1>} />
    <Route path="/about" render={() => <h1>About</h1>} />
  </div>
)

const forceRefresh = () => {
  console.log(new Date());
  return false
}
const BrowserRouterApp = () => (
  <BrowserRouter forceRefresh={forceRefresh()}>
    <LinksRouters />
  </BrowserRouter>
)
const HashRouterApp = () => (
  <HashRouter hashType="hashbang">
    <LinksRouters />
  </HashRouter>
)
const MemoryRouterApp = () => (
  <MemoryRouter
    initialEntries={['/', '/about']}
    initialIndex={1}
  >
    <LinksRouters />
  </MemoryRouter>
)
const StaticRouterApp = () => (
  <StaticRouter
    location="/about"
    context={{}}
  >
    <LinksRouters />
  </StaticRouter>
)

export default StaticRouterApp;
