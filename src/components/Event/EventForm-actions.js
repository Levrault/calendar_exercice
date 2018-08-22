export const EVENT_FORM_OPEN = 'EVENT_FORM_OPEN';
export const EVENT_FORM_CLOSE = 'EVENT_FORM_CLOSE';
export const EVENT_FORM_SUBMIT = 'EVENT_FORM_SUBMIT';

/**
 * On submit
 * @param {object} value
 */
export const onSubmit = (values) => (
  {
    type: EVENT_FORM_SUBMIT,
    payload: { ...values }
  }
);

