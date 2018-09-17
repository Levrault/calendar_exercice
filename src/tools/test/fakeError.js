/**
 * Return a fake error, use to test container
 * @return {Object}
 */
export default function getFakeError () {
  return {
    error: new Error('[Error: Request failed with status code 404]')
  };
}

