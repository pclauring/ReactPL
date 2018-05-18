import React, { Component } from 'react';
import ProfileHeader from './components/ProfileHeader/component.js';
import BottomNavigation from './components/BottomNavigation/component.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';
import GithubButton from './components/GithubIcon/component.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pierce Lauring</h1>
        </header>
        <ProfileHeader />
        <p className="App-intro">
          Test Deploy Website
        </p>
        <MuiThemeProvider>
          <GithubButton />
        </MuiThemeProvider>
        <MuiThemeProvider>
        <BottomNavigation />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
