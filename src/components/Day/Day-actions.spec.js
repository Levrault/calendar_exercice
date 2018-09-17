import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './Day-actions';

// axios
const mockAxios = new MockAdapter(axios);

// mock store
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe('Day actions', () => {
  beforeEach(() => {
    mockAxios.reset();
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
