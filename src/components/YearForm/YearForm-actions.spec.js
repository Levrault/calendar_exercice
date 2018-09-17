import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './YearForm-actions';
import { EVENTS_INIT } from '../Event/Events-actions';
import getFakeData from '../../tools/test/fakeData';

// data
const yearStore = getFakeData().year;
const eventStore = getFakeData().events;

// axios
const mockAxios = new MockAdapter(axios);

// mock store
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe('YearForm actions', () => {
  beforeEach(() => {
    mockAxios.reset();
    store.clearActions();
  });

  it('should create an action to begin the fetching of all data', () => {
    const expectedAction = [{
      type: actions.YEAR_FETCH_ALL_BEGIN
    }];

    store.dispatch(actions.yearFetchAllBegin());

    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action when all data are successefully fetched', () => {
    const expectedAction = [{
      type: actions.YEAR_FETCH_ALL_SUCCESS,
      payload: {
        data: yearStore.data,
        min: yearStore.min,
        max: yearStore.max
      }
    }];

    store.dispatch(actions.yearFetchAllSuccess(yearStore.data));

    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an error when all data are not successefully fetched', () => {
    const error = {
      response: 404
    };

    const expectedAction = [{
      type: actions.YEAR_FETCH_ALL_FAILURE,
      payload: {
        error
      }
    }];

    store.dispatch(actions.yearFetchAllError(error));

    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action to begin the fetching of a data', () => {
    const expectedAction = [{
      type: actions.YEAR_FETCH_BEGIN
    }];

    store.dispatch(actions.yearFetchBegin());

    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action when a data are successefully fetched', () => {
    const expectedAction = [{
      type: actions.YEAR_FETCH_SUCCESS,
      payload: {
        current: yearStore.data
      }
    }];

    store.dispatch(actions.yearFetchSuccess(yearStore.data));

    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an error when a data are not successefully fetched', () => {
    const error = {
      response: 404
    };
    const expectedAction = [{
      type: actions.YEAR_FETCH_FAILURE,
      payload: {
        error
      }
    }];

    store.dispatch(actions.yearFetchError(error));

    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should fetch calendar by id', async () => {
    const expectedActions = [
      { type: actions.YEAR_FETCH_BEGIN },
      { type: actions.YEAR_FETCH_SUCCESS, payload: { current: yearStore.current } },
      { type: EVENTS_INIT, payload: { events: eventStore } }
    ];

    mockAxios.onGet(`${BASE_URL}calendar/576c020e2bfc5849`).reply(200, yearStore.current);

    await store.dispatch(actions.fetch('576c020e2bfc5849'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should manage error when a calendar cannot be get by his id', async () => {
    mockAxios.onGet(`${BASE_URL}calendar/576c020e2bfc5849`).reply(404);

    try {
      await store.dispatch(actions.fetch('576c020e2bfc5849'));
    } catch (e) {
      const expectedActions = [
        { type: actions.YEAR_FETCH_BEGIN },
        { type: actions.YEAR_FETCH_FAILURE,
          payload: {
            error: e
          }
        }
      ];
      expect(store.getActions()).toEqual(expectedActions);
    }
  });

  it('should fetch all availables calendars', async () => {
    const expectedActions = [
      { type: actions.YEAR_FETCH_ALL_BEGIN },
      { type: actions.YEAR_FETCH_ALL_SUCCESS,
        payload: {
          data: yearStore.data,
          min: yearStore.min,
          max: yearStore.max
        }
      }
    ];

    mockAxios.onGet(`${BASE_URL}calendar`).reply(200, yearStore.data);

    await store.dispatch(actions.fetchAll());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should manage error when calendars are unavailables', async () => {
    mockAxios.onGet(`${BASE_URL}calendar`).reply(404);

    try {
      await store.dispatch(actions.fetchAll());
    } catch (e) {
      const expectedActions = [
        { type: actions.YEAR_FETCH_ALL_BEGIN },
        { type: actions.YEAR_FETCH_ALL_FAILURE,
          payload: {
            error: e
          }
        }
      ];
      expect(store.getActions()).toEqual(expectedActions);
    }
  });
});
