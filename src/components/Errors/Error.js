import React from 'react';
import PropTypes from 'prop-types';
import PageNotFound from './PageNotFound';
import styles from './Error.css';

const register = {
  404: PageNotFound
};

/**
 * Map the corresponding error
 * to the associate component
 * @param {object} response
 * @returns {node|null}
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
