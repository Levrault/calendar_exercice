import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import getFakeStore from '../../tools/test/fakeStore';
import { shallow } from '../../tools/test/enzyme';
import Day from './Day';

const store = getFakeStore();

const mock = {
  date: '1-1',
  value: 1,
  onSelected: jest.fn(),
  selectedDate: '1-1',
  isSelected: false,
  monthId: 'a4e8a03dbe54ca7d',
  event: undefined
};

const mockEvents = {
  monthId: '0b54aaf1844478e4',
  name: 'hello',
  color: '#EEEEEE',
  fontColor: '#212121',
  day: 8,
  id: '05af70ab81cc3a40'
};

describe('Day component', () => {
  it('should render without problem', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Day
          {...mock}
        />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with an event', () => {
    const newMock = { ...mock, isSelected: true, event: mockEvents };

    const component = renderer.create(
      <Provider store={store}>
        <Day
          {...newMock}
        />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with event form', () => {
    const newMock = { ...mock, isSelected: true };

    const component = renderer.create(
      <Provider store={store}>
        <Day
          {...newMock}
        />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call onSelected on handleClick', () => {
    const component = shallow(
      <Day
        {...mock}
        selectedDate="2-1"
      />
    );

    component.instance().handleClick();
    expect(component.instance().props.onSelected).toHaveBeenCalled();
  });

  it('should call onSelected with empty value when selectedDate is different from date and isSelected is true', () => {
    const newMock = { ...mock, isSelected: true };
    const component = shallow(
      <Day
        {...newMock}
      />
    );

    component.instance().handleClick();
    expect(component.instance().props.onSelected).toHaveBeenCalled();
  });

  it('should not call onSelected selectedDate is different from date and isSelected is false', () => {
    const component = shallow(
      <Day
        {...mock}
      />
    );

    component.instance().handleClick();
    expect(component.instance().props.onSelected).toHaveBeenCalled();
  });
});
