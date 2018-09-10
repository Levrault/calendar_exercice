import React from 'react';
import renderer from 'react-test-renderer';
import Main from './Main';

describe('Main component', () => {
  it('should render without problem', () => {
    const component = renderer.create(
      <Main><div>Main</div></Main>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
