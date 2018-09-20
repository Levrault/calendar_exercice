import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Router from '../Router/Router';
import styles from './App.css';

/**
 * Main app
 */
class App extends Component {
  /**
   * @returns {node}
   */
  render () {
    return (
      <div className={styles.container}>
        <Navbar />
        <Router />
      </div>
    );
  }
}

export default App;
