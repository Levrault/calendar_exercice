import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store/configureStore';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

/**
 * Mainframe app
 * @param {Node} Component
 */
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Component />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );
};

registerServiceWorker();

render(App);

if (module.hot) {
  module.hot.accept('./components/App/App', () => {
    render(App);
  });
}
