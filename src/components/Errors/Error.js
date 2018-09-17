import React from 'react';
import PropTypes from 'prop-types';
import PageNotFound from './PageNotFound';
import styles from './Error.css';

const register = {
  404: PageNotFound
};

/**
 * Show message error
 * @param {string} message
 */
const Error = ({ response }) => {
  const Component = register[response.status];
  if (!Component) return null;
  return (
    <div className={styles.container} >
      <Component />
    </div>
  );
};

Error.propTypes = {
  response: PropTypes.object.isRequired
};

export default Error;
