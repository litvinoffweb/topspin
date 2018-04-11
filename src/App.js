import React, { Component } from 'react';
import './App.css';
import { base } from './config';
import Root from './containers/Routes/Root'

import Box from 'grommet/components/Box';

class App extends Component {
  render() {
    return (
      <Box className="App">
        <Root />
      </Box>
    );
  }
}

export default App;
