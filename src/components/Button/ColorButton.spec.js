import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from '../../tools/test/enzyme';
import ColorButton from './ColorButton';

const mock = {
  value: '#FF4081',
  onClick: jest.fn()
};

describe('ColorButton component', () => {
  it('should render correctly', () => {
    const component = renderer.create(
      <ColorButton
        {...mock}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly when activated', () => {
    const component = renderer.create(
      <ColorButton
        {...mock}
        active
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call onClick function', () => {
    const component = shallow(
      <ColorButton
        {...mock}
      />
    );

    component.simulate('click');
    expect(mock.onClick).toHaveBeenCalled();
  });
});
