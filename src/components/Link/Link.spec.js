import React from 'react';
import renderer from 'react-test-renderer';
import Link from './Link';

jest.mock('react-router-dom', () => ({
  Link: jest.fn(({ title, children }) =>
    <a title={title}>This is a react-router:Link component: {children}</a>,
  )
}));

describe('Link component', () => {
  it('should render without problem', () => {
    const component = renderer.create(
      <Link title="Title" to="link" />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
