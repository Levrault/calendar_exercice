import React from 'react';
import PropTypes from 'prop-types';
import { Provider as ReduxProvider } from 'react-redux';
import getFakeStore from '../test/fakeStore';

const store = getFakeStore();

const Provider = ({ story }) => (
  <ReduxProvider store={store}>
    {story}
  </ReduxProvider>
);

Provider.propTypes = {
  story: PropTypes.any
};

export default Provider;
