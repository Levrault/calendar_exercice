import React from 'react';
import { Provider } from 'react-redux';
import getFakeStore from '../../tools/test/fakeStore';
import renderer from 'react-test-renderer';
import Navbar from './Navbar';

describe('Navbar component', () => {
  it('should render without problem', () => {
    const store = getFakeStore();
    const component = renderer.create(
      <Provider store={store}>
        <Navbar />
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
