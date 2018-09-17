import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from '../../tools/test/enzyme';
import Error from './Error';

describe('Error component', () => {
  it('should render without problem', () => {
    const component = renderer.create(
      <Error response={{ status: 404 }} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should return null if error isn\'t mapped', () => {
    const component = shallow(
      <Error response={{ status: -1 }} />,
    );
    expect(component.type()).toBeNull();
  });
});
