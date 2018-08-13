import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import styles from './YearForm.css';
import CountDownField from '../Field/CountDownField';

/**
 * Create a profile
 */
class YearForm extends Component {
  /**
   * onSubmit
   */
  onSubmit = (values) => {
    this.props.handleSubmit(values);
  }

  /**
  * Render
  */
  render () {
    return (
      <form className={styles.profileForm} onSubmit={this.onSubmit}>
        <CountDownField name="year" />
      </form>
    );
  }
}

YearForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'year'
})(YearForm);
