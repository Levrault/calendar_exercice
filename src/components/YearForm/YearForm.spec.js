import React from 'react';
import { shallow, mount } from '../../tools/test/enzyme';
import renderer from 'react-test-renderer';
import YearForm from './YearForm';

const mock = {
  fetchAll: jest.fn(),
  fetch: jest.fn(),
  min: 2018,
  max: 2020,
  ids: [{
    id: '576c020e2bfc5849',
    year: 2018
  },
  {
    id: '576c020e2bfc5810',
    year: 2019
  }]
};

describe('YearForm component', () => {
  beforeEach(() => {
    mock.fetch.mockReset();
    mock.fetchAll.mockReset();
  });

  it('should render without problem', () => {
    const component = renderer.create(
      <YearForm {...mock} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render when loading when getting data', () => {
    const component = renderer.create(
      <YearForm {...mock} ids={[]} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call fetchAll on componentDidMount', () => {
    const spy = jest.spyOn(YearForm.prototype, 'componentDidMount');
    const component = shallow(
      <YearForm {...mock} />
    );
    component.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
    expect(component.instance().props.fetchAll).toHaveBeenCalled();
    spy.mockRestore();
  });

  it('should call fetch when fetchData is called', () => {
    const component = shallow(
      <YearForm {...mock} />
    );
    component.instance().fetchData(2018);
    expect(component.instance().props.fetch).toHaveBeenCalled();
  });

  it('should not call fetch when value does not exit', () => {
    const component = shallow(
      <YearForm {...mock} />
    );
    component.instance().fetchData(2015);
    expect(component.instance().props.fetch).not.toHaveBeenCalled();
  });

  it('should call fetch when value is changed', () => {
    const component = shallow(
      <YearForm {...mock} />
    );

    component.instance().componentDidUpdate({ ...mock }, { value: 2019 });

    // check new value
    expect(component.instance().props.fetch).toHaveBeenCalled();
  });

  it('should update value when a valid value is passed', () => {
    const component = shallow(
      <YearForm {...mock} />
    );

    // default state
    expect(component.state().value).toBe(mock.min);

    // should update
    const button = component.find('button').last();
    button.simulate('click');

    // check new value
    expect(component.state().value).toBe(2019);
  });

  it('should not update when an invalid value is passed (when lower thant min and highet than max)', () => {
    const component = mount(
      <YearForm {...mock} min={2018} max={2018} />
    );

    // default state
    expect(component.state().value).toBe(mock.min);

    // should update
    const firstButton = component.find('button').first();
    firstButton.simulate('click');

    expect(component.state().value).not.toBe(2017);

    const lastButton = component.find('button').last();
    lastButton.simulate('click');

    expect(component.state().value).not.toBe(2019);
  });

  it('should fetch data only when value change', () => {
    const spy = jest.spyOn(YearForm.prototype, 'componentDidUpdate');
    const component = mount(
      <YearForm {...mock} />
    );

    // default state
    expect(component.state().value).toBe(mock.min);

    // good one
    component.instance().setState({
      value: 2019
    });

    expect(spy).toHaveBeenCalled();
    expect(component.instance().props.fetch).toHaveBeenCalled();
    spy.mockRestore();
  });

  it('should fetch data only when ids have been fetched first', () => {
    const spy = jest.spyOn(YearForm.prototype, 'componentDidUpdate');
    const component = mount(
      <YearForm {...mock} ids={[]} />
    );

    // default state
    expect(component.props().ids.length).toBe(0);

    component.setProps({
      ids: mock.ids
    });

    expect(spy).toHaveBeenCalled();
    expect(component.instance().props.fetch).toHaveBeenCalled();
    spy.mockRestore();
  });
});
