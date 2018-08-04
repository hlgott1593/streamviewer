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
          <h1 className="App-title">Welcogme to React</h1>
        </header>
        <Switch>
          <Redirect exact from='/' to='/home'/>
          <Route path='/home' component={HomePage}/>
          <Route path='/watch/:videoId' component={WatchPage}/>
          <Route path='/stats/:videoId' component={StatsPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
