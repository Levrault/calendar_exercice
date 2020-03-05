import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './EventForm-actions';
import { EVENTS_ADD, EVENTS_DELETE } from '../Event/Events-actions';
import { colors } from '../Palette/colors-constant';

// mock store
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

const event = {
  monthId: '0b54aaf1844478e4',
  name: 'hello',
  color: '#EEEEEE',
  day: 8,
  id: '0b54aaf1844478e4-8'
};


describe('EventForm actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('should create an action on form submit begin', () => {
    const expectedAction = [{
      type: actions.EVENTFORM_SUBMIT_BEGIN
    }];

    store.dispatch(actions.eventFormSubmitBegin());

    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action on form submit success', () => {
    const expectedAction = [{
      type: actions.EVENTFORM_SUBMIT_SUCCESS
    }];

    store.dispatch(actions.eventFormSubmitSuccess());

    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action on form submit failure', () => {
    const error = {
      response: 400
    };

    const expectedAction = [{
      type: actions.EVENTFORM_SUBMIT_FAILURE,
      payload: {
        error
      }
    }];

    store.dispatch(actions.eventFormSubmitError(error));

    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action on form delete begin', () => {
    const expectedAction = [{
      type: actions.EVENTFORM_DELETE_BEGIN
    }];

    store.dispatch(actions.eventFormDeleteBegin());

    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action on form delete success', () => {
    const expectedAction = [{
      type: actions.EVENTFORM_DELETE_SUCCESS
    }];

    store.dispatch(actions.eventFormDeleteSuccess());

    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action on form delete failure', () => {
    const error = {
      response: 400
    };

    const expectedAction = [{
      type: actions.EVENTFORM_DELETE_FAILURE,
      payload: {
        error
      }
    }];

    store.dispatch(actions.eventFormDeleteError(error));

    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action when color change', () => {
    const expectedAction = [{
      type: actions.EVENTFORM_COLOR_CHANGE,
      payload: {
        color: colors[0].code
      }
    }];

    store.dispatch(actions.colorChange(colors[0].code));

    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action when event form reset', () => {
    const expectedAction = [{
      type: actions.EVENTFORM_RESET
    }];

    store.dispatch(actions.eventFormReset());

    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should post a new event', async () => {
    const expectedActions = [
      { type: actions.EVENTFORM_SUBMIT_BEGIN },
      { type: actions.EVENTFORM_SUBMIT_SUCCESS },
      { type: EVENTS_ADD, payload: { event } }
    ];

    await store.dispatch(actions.post(event));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should manage error when it fail to create event', async () => {
    try {
      await store.dispatch(actions.post(event.id, event.monthId));
    } catch (e) {
      const expectedActions = [
        { type: actions.EVENTFORM_SUBMIT_BEGIN },
        { type: actions.EVENTFORM_SUBMIT_FAILURE,
          payload: {
            error: e
          }
        }
      ];
      expect(store.getActions()).toEqual(expectedActions);
    }
  });

  it('should delete an event', async () => {
    const expectedActions = [
      { type: actions.EVENTFORM_DELETE_BEGIN },
      { type: actions.EVENTFORM_DELETE_SUCCESS },
      { type: EVENTS_DELETE, payload: { id: event.id, monthId: event.monthId } }
    ];

    await store.dispatch(actions.deleteEvent(event.id, event.monthId));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should manage error when it fail to delete an event', async () => {
    try {
      await store.dispatch(actions.deleteEvent(event.id, event.monthId));
    } catch (e) {
      const expectedActions = [
        { type: actions.EVENTFORM_DELETE_BEGIN },
        { type: actions.EVENTFORM_DELETE_FAILURE,
          payload: {
            error: e
          }
        }
      ];
      expect(store.getActions()).toEqual(expectedActions);
    }
  });
});
