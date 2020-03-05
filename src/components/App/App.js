import React, { Component } from 'react';
import CalendarConnected from '../Calendar/CalendarConnected';
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
        <CalendarConnected />
      </div>
    );
  }
}

export default App;
