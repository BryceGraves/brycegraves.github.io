import { SET_URL } from '../constants/nav';

export default (
  state = {
    url: '/',
  },
  action
) => {
  switch (action.type) {
    case SET_URL:
      return {
        ...state,
        url: action.url,
      };
    default:
      return state;
  }
};
