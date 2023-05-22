export const URL = process.env.REACT_APP_API_URL

const endPoints = {
  AUTH_LOGIN: `${URL}/auth/login`,
  READING_lIST: `${URL}/api/readinglist`,
  DELETE_FEED: `${URL}/api/deletefeed`,
  ADD_FEED: `${URL}/api/feed-admin`,
  LIST_FEED: `${URL}/api/feeds`
};
export default endPoints;
