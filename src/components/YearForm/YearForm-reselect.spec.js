import * as selector from './YearForm-reselect';
import getFakeData from '../../tools/test/fakeData';

const state = getFakeData();

describe('YearForm-reselect', () => {
  it('dataSelector should return data when it exist', () => {
    const data = selector.dataSelector(state);
    expect(data).toEqual(state.year.data);
    expect(data).not.toEqual([]);
  });

  it('dataSelector should return an empty array when data does not exist', () => {
    const data = selector.dataSelector({});
    expect(data).not.toEqual(state.year.data);
    expect(data).toEqual([]);
    expect(data).toHaveLength(0);
  });

  it('monthsSelector should return current.months when it exist', () => {
    const months = selector.monthsSelector(state);
    expect(months).toEqual(state.year.current.months);
    expect(months).not.toEqual([]);
  });

  it('monthsSelector should return an empty array when current.months does not exist', () => {
    const months = selector.monthsSelector({});
    expect(months).not.toEqual(state.year.current.data);
    expect(months).toEqual([]);
    expect(months).toHaveLength(0);
  });

  it('currentYearSelector return current.year when it exist', () => {
    const year = selector.currentYearSelector(state);
    expect(year).toEqual(state.year.current.year);
  });

  it('currentYearSelector should return "2018" when current.year does not exist', () => {
    const year = selector.currentYearSelector({});
    expect(year).toEqual(2018);
  });

  it('currentYearIdSelector should return current.year when it exist', () => {
    const id = selector.currentYearIdSelector(state);
    expect(id).toEqual(state.year.current.id);
    expect(id).not.toEqual('');
  });

  it('currentYearIdSelector should return an empty string when current.year does not exist', () => {
    const id = selector.currentYearIdSelector({});
    expect(id).toEqual('');
    expect(id).not.toEqual(state.year.current.id);
  });

  it('loadingSelector should return loading when it exist', () => {
    const loading = selector.loadingSelector(state);
    expect(loading).toBeFalsy();
  });

  it('loadingSelector should return "false" when loading does not exist', () => {
    const loading = selector.loadingSelector({});
    expect(loading).toBeFalsy();
  });

  it('errorSelector should return error when it exist', () => {
    const error = selector.errorSelector(state);
    expect(error).toBeNull();
  });

  it('errorSelector should return null when error does not exist', () => {
    const error = selector.errorSelector({});
    expect(error).toBeNull();
  });

  it('minSelector should return min when it exist', () => {
    const min = selector.minSelector(state);
    expect(min).toEqual(2018);
    expect(min).not.toEqual(2015);
  });

  it('minSelector should return "2015" when min does not exist', () => {
    const min = selector.minSelector({});
    expect(min).toEqual(2015);
    expect(min).not.toEqual(2018);
  });

  it('maxSelector should return max when it exist', () => {
    const max = selector.maxSelector(state);
    expect(max).toEqual(2019);
    expect(max).not.toEqual(2025);
  });

  it('maxSelector should return "2025" when max does not exist', () => {
    const max = selector.maxSelector({});
    expect(max).toEqual(2025);
    expect(max).not.toEqual(2019);
  });
});
