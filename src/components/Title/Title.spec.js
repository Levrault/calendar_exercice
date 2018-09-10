import React from 'react';
import renderer from 'react-test-renderer';
import Title from './Title';

describe('Title component', () => {
  it('should render without props', () => {
    const component = renderer.create(
      <Title>Title</Title>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
