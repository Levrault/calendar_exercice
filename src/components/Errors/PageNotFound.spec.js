import React from 'react';
import renderer from 'react-test-renderer';
import PageNotFound from './PageNotFound';

describe('PageNotFound component', () => {
  it('should render without problem', () => {
    const component = renderer.create(
      <PageNotFound />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
