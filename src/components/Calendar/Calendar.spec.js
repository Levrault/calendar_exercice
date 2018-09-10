import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import CalendarConnected from './CalendarConnected';
import Calendar from './Calendar';
import getFakeStore from '../../tools/test/fakeStore';
import getFakeData from '../../tools/test/fakeData';
import { shallow } from '../../tools/test/enzyme';

const store = getFakeStore();
const mock = getFakeData().year.current;
const nextMock = getFakeData().year.data[1];

describe('Calendar component', () => {
  it('should render without problem', () => {
    const component = renderer.create(
      <Provider store={store}>
        <CalendarConnected />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should return an error when there is an error', () => {
    const component = renderer.create(
      <Calendar {...mock} error={{ response: { status: 404 } }} />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should return null when there is no month', () => {
    const component = shallow(
      <Calendar {...mock} months={[]} error={null} />
    );

    expect(component.isEmptyRender()).toBeTruthy();
  });

  it('should render only when there is new months has props', () => {
    const component = shallow(
      <Calendar {...mock} error={null} />
    );

    expect(component.instance().shouldComponentUpdate(nextMock)).toBeTruthy();
    expect(component.instance().shouldComponentUpdate({ months: [] })).toBeFalsy();
  });
});
