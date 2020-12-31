export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export const MAGIC_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || "pk_test_E148540E07EAB4B3";

export const STRIPE_PK =
  process.env.NEXT_PUBLIC_STRIPE_PK ||
  "pk_test_51I4WkFGiR9lVh1FZkYkuTDo5rp6iAySc8JxCeZDo6ri9n1NLqMGEqippXMkQFrOHvyfsmMlB3u3veErYHz9aqUTX001cwyTwCO";

/**
 * Given a image object return the proper path to display it
 * Provides a default as well
 * @param {any} image
 */
export const fromImageToUrl = (image) => {
  if (!image) {
    return "/vercel.svg"; //Or default image here
  }
  if (image.url.indexOf("/") === 0) {
    //It's a relative url, add API URL
    return `${API_URL}${image.url}`;
  }

  return image.url;
};
