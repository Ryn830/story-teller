export const SET_ENGAGMENT = 'SET_ENGAGMENT';

export const fetchEngagement = function() {
  return function() {
    return { type: SET_ENGAGMENT };
  }
};

export function engagementReducer(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}
