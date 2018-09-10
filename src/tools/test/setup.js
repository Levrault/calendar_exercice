/**
 * Disable the pushState method
 */
window.history.pushState = () => {};

/**
 * Instant rAF
 */
window.requestAnimationFrame = cb => cb();


window.BASE_URL = '';

