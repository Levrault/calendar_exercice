import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from '../../tools/test/enzyme';
import ColorPalette from './ColorPalette';
import ColorButton from '../Button/ColorButton';
import colors from './colors-constant';

describe('ColorPalette component', () => {
  it('should be hidden when active is false', () => {
    const component = renderer.create(
      <ColorPalette active={false} onClick={() => {}} value={colors[0].code} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly when active is true', () => {
    const component = renderer.create(
      <ColorPalette active onClick={() => {}} value={colors[0].code} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call onClick props when a ColorButton is clicked', () => {
    const onClick = jest.fn();
    const component = mount(
      <ColorPalette active onClick={onClick} value={colors[0].code} />
    );
    component.find(ColorButton).first().simulate('click');
    expect(onClick).toHaveBeenCalled();
  });

  it('should create has many colorButton has there colors in colors-constant', () => {
    const component = mount(
      <ColorPalette active onClick={() => {}} value={colors[0].code} />
    );
    const colorsBtn = component.find(ColorButton);
    expect(colorsBtn.length).toBe(colors.length);
  });
});
