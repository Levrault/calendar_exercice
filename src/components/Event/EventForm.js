import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import EventButton from '../Button/EventButton';
import ColorInputField from '../Field/ColorInputField';
import ColorPalette from '../Palette/ColorPalette';
import colors from '../Palette/colors-constant';
import styles from './EventForm.css';

class EventForm extends Component {
  /**
  * @contructor
  * @param {object} props
  */
  constructor (props) {
    super(props);
    this.state = {
      displayColorField: false
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

  /**
   * Submit form
   */
  handleSubmit = (event) => {
    console.log('event', event); //@TODO : to remove
  }

  /**
  * Render
  */
  render () {
    const { displayColorField } = this.state;
    const { handleSubmit, currentColor } = this.props;

    return (
      <div className={styles.container}>
        <form className={styles.eventForm} onSubmit={handleSubmit(this.handleSubmit)}>

          <div className={styles.header}>
            <Field name="event" type="text" label="Rappel" code={currentColor} component={ColorInputField} required />
          </div>

          <Field name="color" type="radio" component={ColorPalette} active={displayColorField} />

          <div className={styles.buttons}>

            <EventButton type="button" onClick={this.handleCloseClick}>
              <i className="material-icons">clear</i>
            </EventButton>

            <EventButton type="submit">
              <i className="material-icons">add</i>
            </EventButton>

            <EventButton type="button" onClick={this.handleColorPaletteClick} active={displayColorField}>
              <i className="material-icons">color_lens</i>
            </EventButton>
          </div>

        </form>
      </div>
    );
  }
}

EventForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  currentColor: PropTypes.string.isRequired
};

EventForm.defaultProps = {
  currentColor: colors[colors.length - 1].code
};

export default reduxForm({
  form: 'event',
  fields: ['event', 'color'],
  initialValues: {
    event: '',
    color: colors[colors.length - 1].code
  }
})(EventForm);
