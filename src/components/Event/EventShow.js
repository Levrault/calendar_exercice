import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventButton from '../Button/EventButton';
import styles from './EventShow.css';

/**
 * Show/delete existing event
 * @class EventShow
 * @param {function} onDelete
 * @param {function} onCancel
 * @param {string} id
 * @param {string} color
 * @param {string} fontColor
 * @param {string} monthId
 * @param {string} name
 */
class EventShow extends Component {
  /**
   * Close form
   */
  handleCloseClick = () => {
    this.props.onCancel();
  }

  /**
   * Delete event and hide the form
   */
  handleDelete = () => {
    const { onDelete, id, monthId } = this.props;
    onDelete(id, monthId);
    this.handleCloseClick();
  }

  /**
  * Render
  * @returns {node}
  */
  render () {
    const { name, color, fontColor } = this.props;
    const fontStyle = {
      color: fontColor
    };

    return (
      <div className={styles.container} style={{ backgroundColor: color }}>
        <div className={styles.title} style={fontStyle}>
          {name}
        </div>

        <div className={styles.buttons}>
          <EventButton style={fontStyle} type="button" onClick={this.handleCloseClick}>
            <i className="material-icons">clear</i>
          </EventButton>

          <EventButton style={fontStyle} type="button" onClick={this.handleDelete}>
            <i className="material-icons">delete</i>
          </EventButton>
        </div>
      </div>
    );
  }
}

EventShow.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  fontColor: PropTypes.string.isRequired,
  monthId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default EventShow;
