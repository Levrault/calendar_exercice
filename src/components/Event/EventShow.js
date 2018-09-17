import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventButton from '../Button/EventButton';
import styles from './EventShow.css';

class EventShow extends Component {
  /**
   * Close form
   */
  handleCloseClick = () => {
    this.props.onCancel();
  }

  /**
   * Delete event
   */
  handleDelete = () => {
    const { onDelete, id, monthId } = this.props;
    onDelete(id, monthId);
    this.handleCloseClick();
  }

  /**
  * Render
  */
  render () {
    const { name, color } = this.props;

    return (
      <div className={styles.container} style={{ backgroundColor: color }}>
        <div className={styles.title}>
          {name}
        </div>

        <div className={styles.buttons}>
          <EventButton type="button" onClick={this.handleCloseClick}>
            <i className="material-icons">clear</i>
          </EventButton>

          <EventButton type="button" onClick={this.handleDelete}>
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
  monthId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default EventShow;