export const YEAR_FORM_SUBMIT = 'YEAR_FORM_SUBMIT';

/**
 * On submit
 * @param {object} value
 */
export const onSubmit = (values) => (
  {
    type: YEAR_FORM_SUBMIT,
    payload: { ...values }
  }
);


