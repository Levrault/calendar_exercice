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
        <CalendarConnected months={[
          {
            name: 'January',
            chronology: 1,
            numberOfDays: 31,
            firstDayIndex: 1,
            calendarId: '576c020e2bfc5849',
            id: 'a4e8a03dbe54ca7d',
            events: []
          }]
        } />
      </div>
    );
  }
}

export default App;
