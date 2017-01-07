import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './app/AppBar';
import Home from './apartments/updates';

import '../css/main.css';

const App = () => (
  <div className="MainWrapper">
    <MuiThemeProvider>
      <NavBar />
    </MuiThemeProvider>
    <MuiThemeProvider>
      <Home />
    </MuiThemeProvider>
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
