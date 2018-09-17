import React from 'react';
import renderer from 'react-test-renderer';
import ColorInputField from './ColorInputField';

describe('ColorInput component', () => {
  it('should render without problem', () => {
    const component = renderer.create(
      <ColorInputField
        name="event"
        type="text"
        label="Rappel"
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with a different border color', () => {
    const component = renderer.create(
      <ColorInputField
        name="event"
        type="text"
        code="#FFFFFF"
        label="Rappel"
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
