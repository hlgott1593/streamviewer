import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from './pages/Home';
import WatchPage from './pages/Watch';
import StatsPage from './pages/Stats';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="App-title">Stream Viewer</h2>
          <a href="/logout" className="StreamHeader-nav btn btn-primary" role="button">Logout</a>
        </header>
        <div className="App-content">
          <Switch>
            <Redirect exact from='/' to='/home'/>
            <Route path='/home' component={HomePage}/>
            <Route path='/watch/:videoId' component={WatchPage}/>
            <Route path='/stats/:videoId' component={StatsPage}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
