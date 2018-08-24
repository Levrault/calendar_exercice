import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import styles from './YearForm.css';
import CountDownField from '../Field/CountDownField';

/**
 * Create a profile
 */
class YearForm extends Component {
  /**
  * Render
  */
  render () {
    const { handleSubmit } = this.props;
    return (
      <form className={styles.profileForm} onSubmit={handleSubmit}>
        <Field name="year" component={props =>
          (<CountDownField {...props.input} />)
        }/>
      </form>
    );
  }
}

YearForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'year',
  initialValues: {
    year: 2018
  }
})(YearForm);
