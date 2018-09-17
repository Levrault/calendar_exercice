import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from '../../tools/test/enzyme';
import CalendarButton from './CalendarButton';

describe('CalendarButton component', () => {
  it('should render without being active or in edit mode', () => {
    const component = renderer.create(
      <CalendarButton
        color="#EEEEEE">
        CalendarButton
      </CalendarButton>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with active mode on', () => {
    const component = renderer.create(
      <CalendarButton
        color="#EEEEEE"
        active>
        CalendarButton
      </CalendarButton>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call onClick function', () => {
    const onClick = jest.fn();
    const component = shallow(
      <CalendarButton
        onClick={onClick}
        color="#EEEEEE"
        active>
        CalendarButton
      </CalendarButton>,
    );

    component.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
