import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventButton from '../Button/EventButton';
import ColorInputField from '../Field/ColorInputField';
import ColorPalette from '../Palette/ColorPalette';
import colors from '../Palette/colors-constant';
import Message from '../Message/Message';
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
      name: '',
      color: colors[colors.length - 1].code
    };
  }

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
   * @param {object} event
   */
  onColorChange = (event) => {
    const value = event.target.value;
    this.props.onColorChange(value);
    this.setState({
      color: value
    });
  }

  /**
   * @param {object} event
   */
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
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
   * @param {object} event
   */
  onSubmit = (event) => {
    event.preventDefault();
    const { name, color } = this.state;
    const { monthId, day } = this.props;
    this.props.onSubmit({
      name,
      color,
      monthId,
      day
    });
  }

  /**
  * Render
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

          <ColorPalette active={displayColorField} onClick={this.onColorChange} value={color} />

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

EventForm.defaultProps = {
  currentColor: colors[colors.length - 1].code,
  event: {}
};

export default EventForm;
