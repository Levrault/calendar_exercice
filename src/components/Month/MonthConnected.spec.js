import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import getFakeStore from '../../tools/test/fakeStore';
import getFakeData from '../../tools/test/fakeData';
import MonthConnected from './MonthConnected';

const store = getFakeStore();
const mock = getFakeData().year.data[0].months[1];

describe('MonthConnected component', () => {
  it('should render without problem', () => {
    const component = renderer.create(
      <Provider store={store}>
        <MonthConnected {...mock} />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
