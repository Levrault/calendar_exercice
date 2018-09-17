import { eventsByMonthIdFilter } from './Events-reselect';
import getFakeData from '../../tools/test/fakeData';

const state = getFakeData();
const ownProps = state.events['0b54aaf1844478e4'];

describe('Events-reselect', () => {
  it('eventsByMonthIdFilter should return data when it exist', () => {
    const data = eventsByMonthIdFilter(state, { id: '0b54aaf1844478e4' });
    expect(data).toEqual(ownProps);
  });
});
