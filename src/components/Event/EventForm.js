import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import EventButton from '../Button/EventButton';
import InputField from '../Field/InputField';
import ColorPalette from '../Palette/ColorPalette';
import styles from './EventForm.css';

class EventForm extends Component {
  /**
  * @contructor
  * @param {object} props
  */
  constructor (props) {
    super(props);
    this.state = {
      displayColorField: false,
      time: '10:00'
    };
  }

  handleColorPaletteClick = () => {
    this.setState({
      displayColorField: !this.state.displayColorField
    });
  }

  /**
   * Close form
   */
  handleCloseClick = () => {
    this.props.onCancel();
  }

  handleTimeChange = time => this.setState({ time });

  /**
  * Render
  */
  render () {
    if (!this.props.active) return null;

    const { displayColorField } = this.state;

    return (
      <div className={styles.container}>
        <form className={styles.eventForm} onSubmit={this.onSubmit}>
          <div className={styles.header}>
            <InputField label="Rappel" name="event" component="input" type="text" required />
          </div>
          {displayColorField && <ColorPalette />}
          <div className={styles.buttons}>
            <EventButton type="button" onClick={this.handleCloseClick}>
              <i className="material-icons">clear</i>
            </EventButton>
            <EventButton type="submit">
              <i className="material-icons">add</i>
            </EventButton>
            <EventButton type="button" onClick={this.handleColorPaletteClick}>
              <i className="material-icons">color_lens</i>
            </EventButton>
          </div>
        </form>
      </div>
    );
  }
}

EventForm.propTypes = {
  active: PropTypes.bool,
  onCancel: PropTypes.func.isRequired
};

EventForm.defaultProps = {
  active: false
};

export default reduxForm({
  form: 'profile'
})(EventForm);
