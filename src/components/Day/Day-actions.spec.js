import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './Day-actions';

// mock store
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe('Day actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('should select a day', () => {
    const expectedAction = [{
      type: actions.DAY_SELECTED,
      payload: {
        selected: '1-1'
      }
    }];

    store.dispatch(actions.onSelected('1-1'));

    expect(store.getActions()).toEqual(expectedAction);
  });
});
