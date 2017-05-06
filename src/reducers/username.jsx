export const SET_USERNAME = 'SET_USERNAME';

export const setUsername = function(username) {
  return { type: SET_USERNAME, username };
};

export function usernameReducer(state = '', action) {
  switch (action.type) {
    case SET_USERNAME:
      return action.username
    default:
      return state;
  }
}
