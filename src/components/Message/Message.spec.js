import React from 'react';
import renderer from 'react-test-renderer';
import Message from './Message';

describe('Message component', () => {
  it('should render with empty type', () => {
    const component = renderer.create(
      <Message>Message</Message>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render when type has "success" value', () => {
    const component = renderer.create(
      <Message type="success">Message</Message>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render when type has "error" value', () => {
    const component = renderer.create(
      <Message type="error">Message</Message>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
