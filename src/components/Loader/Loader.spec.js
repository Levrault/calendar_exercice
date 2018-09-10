import React from 'react';
import renderer from 'react-test-renderer';
import Loader from './Loader';

describe('Loader component', () => {
  it('should render without problem', () => {
    const component = renderer.create(
      <Loader />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
