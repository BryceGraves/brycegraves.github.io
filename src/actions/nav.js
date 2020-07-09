import { SET_URL } from '../constants/nav';

const navSetUrl = (url) => {
  return {
    type: SET_URL,
    url,
  };
};

export const setNavUrl = (url) => (dispatch) => {
  console.log('Made it');
  dispatch(navSetUrl(url));
};
