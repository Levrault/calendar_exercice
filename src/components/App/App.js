import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Router from '../Router/Router';

/**
 * Main app
 */
class App extends Component {
  /**
   * @returns {node}
   */
  render () {
    return (
      <div>
        <Navbar />
        <Router />
      </div>
    );
  }
}

export default App;
