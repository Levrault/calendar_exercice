import React from 'react';
import renderer from 'react-test-renderer';
import EventShow from './EventShow';
import { shallow } from '../../tools/test/enzyme';

const mock = {
  onDelete: jest.fn(),
  onCancel: jest.fn(),
  monthId: '0b54aaf1844478e4',
  name: 'hello',
  color: '#546E7A',
  fontColor: '#212121',
  day: 19,
  id: '8b058e6f439a8985'
};

describe('EventShow component', () => {
  it('should render without problem', () => {
    const component = renderer.create(
      <EventShow {...mock} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call onDelete when handleDelete is called', () => {
    const component = shallow(
      <EventShow {...mock} />,
    );

    component.instance().handleDelete();
    expect(component.instance().props.onDelete).toHaveBeenCalled();
    expect(component.instance().props.onCancel).toHaveBeenCalled();
  });

  it('should call onCancel when handleCloseClick is called', () => {
    const component = shallow(
      <EventShow {...mock} />,
    );

    component.instance().handleCloseClick();
    expect(component.instance().props.onCancel).toHaveBeenCalled();
  });
});
