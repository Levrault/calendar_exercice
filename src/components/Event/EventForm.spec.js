import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from '../../tools/test/enzyme';
import { colors, fontColors } from '../Palette/colors-constant';
import EventForm from './EventForm';

const mock = {
  onCancel: jest.fn(),
  onSubmit: jest.fn(),
  onColorChange: jest.fn(),
  onReset: jest.fn(),
  monthId: 'a4e8a03dbe54ca7d',
  day: 1,
  errors: null
};

describe('EventForm component', () => {
  it('should render without problem', () => {
    const component = renderer.create(
      <EventForm {...mock} errors={{ name: 'is required' }} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with errors', () => {
    const component = renderer.create(
      <EventForm {...mock} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call reset on unmount', () => {
    const component = shallow(
      <EventForm {...mock} />,
    );

    component.instance().componentWillUnmount();
    expect(component.instance().props.onReset).toHaveBeenCalled();
  });

  it('should update displayColorField state when handleColorPaletteClick is called', () => {
    const component = shallow(
      <EventForm {...mock} />,
    );

    expect(component.instance().state.displayColorField).toBeFalsy();
    component.instance().handleColorPaletteClick();
    expect(component.instance().state.displayColorField).toBeTruthy();
  });

  it('should update color when onColorChange is called', () => {
    const component = shallow(
      <EventForm {...mock} />,
    );

    expect(component.instance().state.color).toEqual(colors[colors.length - 1].code);
    component.instance().handleColorChange(colors[0].code, fontColors.dark)();
    component.update();
    expect(component.instance().state.color).toEqual(colors[0].code);
  });

  it('should update name when handleNameChange is called', () => {
    const component = shallow(
      <EventForm {...mock} />,
    );

    const value = 'name';
    expect(component.instance().state.name).toEqual('');
    component.instance().handleNameChange({ target: { value } });
    expect(component.instance().state.name).toEqual(value);
  });

  it('should call onCancel when handleCloseClick is called', () => {
    const component = shallow(
      <EventForm {...mock} />,
    );

    component.instance().handleCloseClick();
    expect(component.instance().props.onCancel).toHaveBeenCalled();
  });

  it('should call onSubmit when onSubmit is called', () => {
    const component = shallow(
      <EventForm {...mock} />,
    );
    component.instance().handleNameChange({ target: { value: 'name' } });
    component.instance().onSubmit({ preventDefault: jest.fn() });
    expect(component.instance().props.onSubmit).toHaveBeenCalled();
  });
});
