/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// eslint-disable-next-line @typescript-eslint/no-var-requires
export const FB_PIXEL_ID = 1507238090031634;

export const pageview = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  // @ts-ignore
  window.fbq("track", "PageView");
};

export const applyButton = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  // @ts-ignore
  window.fbq("track", "ApplyButton");
};

export const submitButton = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  // @ts-ignore
  window.fbq("track", "submitButton");
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (/** @type {any} */ name, options = {}) => {
  // @ts-ignore
  window.fbq("track", name, options);
};
