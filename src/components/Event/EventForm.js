import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventButton from '../Button/EventButton';
import ColorInputField from '../Field/ColorInputField';
import ColorPalette from '../Palette/ColorPalette';
import { colors, fontColors } from '../Palette/colors-constant';
import Message from '../Message/Message';
import styles from './EventForm.css';

/**
 * Event form
 * @class EventForm
 * @param {function} onCancel
 * @param {function} onSubmit
 * @param {function} onColorChange
 * @param {function} onReset
 * @param {string} monthId
 * @param {number} day
 * @param {object} [errors]
 */
class EventForm extends Component {
  /**
  * @constructor
  * @param {object} props
  */
  constructor (props) {
    super(props);
    this.state = {
      displayColorField: false,
      name: '',
      color: colors[colors.length - 1].code,
      fontColor: fontColors.dark
    };
  }

  /**
   * Reset form when mounted
   */
  componentWillUnmount () {
    this.props.onReset();
  }

  /**
   * Show/hide color palette
   */
  handleColorPaletteClick = () => {
    this.setState({
      displayColorField: !this.state.displayColorField
    });
  }

  /**
   * Update color's value
   * @param {strign} color
   * @param {strign} fontColor
   * @returns {function}
   */
  handleColorChange = (color, fontColor) => () => {
    this.props.onColorChange(color, fontColor);
    this.setState({
      color,
      fontColor
    });
  }

  /**
   * Update name's value
   * @param {object} event
   */
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  /**
   * Close event form
   */
  handleCloseClick = () => {
    this.props.onCancel();
  }

  /**
   * Submit form
   * @param {object} event
   */
  onSubmit = (event) => {
    event.preventDefault();
    const { name, color, fontColor } = this.state;
    const { monthId, day } = this.props;
    this.props.onSubmit({
      name,
      color,
      fontColor,
      monthId,
      day
    });
  }

  /**
  * Render
  * @returns {node}
  */
  render () {
    const { displayColorField, color, name } = this.state;
    const { errors } = this.props;

    return (
      <div className={styles.container}>

        <form className={styles.eventForm} onSubmit={this.onSubmit}>

          <div className={styles.header}>
            <ColorInputField
              name="event"
              type="text"
              label="Rappel"
              value={name}
              onChange={this.handleNameChange}
              required
            />
          </div>

          <ColorPalette active={displayColorField} onClick={this.handleColorChange} value={color} />

          {errors &&
            Object.keys(errors).map(index => {
              const error = errors[index];
              return <Message key={error} type="error">{index} {error}</Message>;
            })
          }

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
  onSubmit: PropTypes.func.isRequired,
  onColorChange: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  monthId: PropTypes.string.isRequired,
  day: PropTypes.number.isRequired,
  errors: PropTypes.object
};

export default EventForm;
