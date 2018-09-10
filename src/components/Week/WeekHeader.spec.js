import React from 'react';
import renderer from 'react-test-renderer';
import WeekHeader from './WeekHeader';

describe('WeekHeader component', () => {
  it('should render without problem', () => {
    const component = renderer.create(
      <WeekHeader />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
