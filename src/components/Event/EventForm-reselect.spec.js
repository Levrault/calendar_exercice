import * as selector from './EventForm-reselect';
import getFakeData from '../../tools/test/fakeData';

const state = getFakeData();
const eventFormName = { ...state.eventForm, name: 'name' };
const eventFormSuccess = { ...state.eventForm, success: true };
const eventFormError = { ...state.eventForm, error: { response: 404 } };
const stateWithError = { ...state, eventForm: eventFormError };
const stateWithName = { ...state, eventForm: eventFormName };
const stateWithSuccess = { ...state, eventForm: eventFormSuccess };

describe('EventForm-reselect', () => {
  it('colorSelector should return data when it exist', () => {
    const color = selector.colorSelector(state);
    expect(color).toEqual(state.eventForm.color);
    expect(color).not.toEqual('');
  });

  it('colorSelector should return an empty string when data does not exist', () => {
    const color = selector.colorSelector({});
    expect(color).not.toEqual(state.eventForm.color);
    expect(color).toEqual('');
  });

  it('nameSelector should return data when it exist', () => {
    const name = selector.nameSelector(stateWithName);
    expect(name).toEqual(stateWithName.eventForm.name);
    expect(name).not.toEqual('');
  });

  it('nameSelector should return an empty string when data does not exist', () => {
    const name = selector.nameSelector({});
    expect(name).not.toEqual(stateWithName.eventForm.name);
    expect(name).toEqual('');
  });

  it('errorSelector should return data when it exist', () => {
    const error = selector.errorSelector(stateWithError);
    expect(error).toEqual(stateWithError.eventForm.error);
    expect(error).not.toBeNull();
  });

  it('errorSelector should return null when data does not exist', () => {
    const error = selector.errorSelector({});
    expect(error).not.toEqual(stateWithError.eventForm.error);
    expect(error).toBeNull();
  });

  it('successSelector should return data when it exist', () => {
    const success = selector.successSelector(stateWithSuccess);
    expect(success).toEqual(stateWithSuccess.eventForm.success);
    expect(success).toBeTruthy();
    expect(success).not.toBeFalsy();
  });

  it('successSelector should return false when data does not exist', () => {
    const success = selector.successSelector({ });
    expect(success).not.toEqual(stateWithSuccess.eventForm.success);
    expect(success).toBeFalsy();
  });
});
