import React from 'react';
import renderer from 'react-test-renderer';
import EventButton from './EventButton';

describe('EventButton component', () => {
  it('should render correctly', () => {
    const component = renderer.create(
      <EventButton type="button">
        <i className="material-icons">clear</i>
      </EventButton>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly when active', () => {
    const component = renderer.create(
      <EventButton type="button" active>
        <i className="material-icons">clear</i>
      </EventButton>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
