import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { shallow } from '../../tools/test/enzyme';
import getFakeStore from '../../tools/test/fakeStore';
import getFakeData from '../../tools/test/fakeData';
import Month from './Month';

const mockJanuary = { ...getFakeData().year.data[0].months[0], events: [] };

const mockEvents = [{
  monthId: '0b54aaf1844478e4',
  name: 'hello',
  color: '#EEEEEE',
  day: 8,
  id: '05af70ab81cc3a40'
},
{
  monthId: '0b54aaf1844478e4',
  name: 'hello',
  color: '#546E7A',
  day: 19,
  id: '8b058e6f439a8985'
}];

const store = getFakeStore();

describe('Month component', () => {
  it('should render without problem', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Month
          {...mockJanuary}
        />
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with events', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Month
          {...mockJanuary}
          events={mockEvents}
        />
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should compute the good amount of days at the beginning of the month', () => {
    const component = shallow(
      <Month
        {...mockJanuary}
        firstDayIndex={3}
      />,
    );

    const expectedResult = [];
    expectedResult.push([0, 0, 1, 2, 3, 4, 5]);
    expectedResult.push([6, 7, 8, 9, 10, 11, 12]);
    expectedResult.push([13, 14, 15, 16, 17, 18, 19]);
    expectedResult.push([20, 21, 22, 23, 24, 25, 26]);
    expectedResult.push([27, 28, 29, 30, 31, 0, 0]);

    expect(component.instance().computeWeeks()).toEqual(expectedResult);
  });

  it('should compute the good amount of days at the end of the month', () => {
    const component = shallow(
      <Month
        {...mockJanuary}
      />,
    );

    const expectedResult = [];
    expectedResult.push([1, 2, 3, 4, 5, 6, 7]);
    expectedResult.push([8, 9, 10, 11, 12, 13, 14]);
    expectedResult.push([15, 16, 17, 18, 19, 20, 21]);
    expectedResult.push([22, 23, 24, 25, 26, 27, 28]);
    expectedResult.push([29, 30, 31, 0, 0, 0, 0]);

    expect(component.instance().computeWeeks()).toEqual(expectedResult);
  });

  it('should get event data', () => {
    expect(Month.getEvent(undefined, 0)).toBeUndefined();
    expect(Month.getEvent([], 0)).toBeUndefined();

    expect(Month.getEvent(mockEvents, 8)).toEqual({
      monthId: '0b54aaf1844478e4',
      name: 'hello',
      color: '#EEEEEE',
      day: 8,
      id: '05af70ab81cc3a40'
    });

    expect(Month.getEvent(mockEvents, 19)).toEqual({
      monthId: '0b54aaf1844478e4',
      name: 'hello',
      color: '#546E7A',
      day: 19,
      id: '8b058e6f439a8985'
    });

    expect(Month.getEvent(mockEvents, 2)).toBeUndefined();
  });

  it('should update whend new events are send', () => {
    const component = shallow(
      <Month
        {...mockJanuary}
      />,
    );

    let shouldUpdate = component.instance().shouldComponentUpdate({ ...mockJanuary });
    expect(shouldUpdate).toBeFalsy();

    shouldUpdate = component.instance().shouldComponentUpdate({ ...mockJanuary, events: mockEvents });
    expect(shouldUpdate).toBeTruthy();

    shouldUpdate = component.instance().shouldComponentUpdate({ ...mockJanuary, events: undefined });
    expect(shouldUpdate).toBeFalsy();
  });

  it('should update whend first day index change', () => {
    const component = shallow(
      <Month
        {...mockJanuary}
      />,
    );

    let shouldUpdate = component.instance().shouldComponentUpdate({ ...mockJanuary });
    expect(shouldUpdate).toBeFalsy();

    shouldUpdate = component.instance().shouldComponentUpdate({ ...mockJanuary, firstDayIndex: mockJanuary.firstDayIndex + 1 });
    expect(shouldUpdate).toBeTruthy();
  });
});
