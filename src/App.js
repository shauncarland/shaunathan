import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './components/home';
import About from './components/about';
import logo from './logo.svg';
import './App.css';

// for routes, home needs to come last
class App extends Component {
  render() {
    return (
    <div>
      <BrowserRouter>
        <div>
          <div className="App">
          <Switch>
          <Route path={`${process.env.PUBLIC_URL}/about`} component={About} />
            <Route path={`${process.env.PUBLIC_URL}/`} component={Home} />
          </Switch>
          </div>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
