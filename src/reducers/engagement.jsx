export const SET_ENGAGMENT = 'SET_ENGAGMENT';

export const fetchEngagement = function() {
  return function() {
    return { action: SET_ENGAGMENT };
  }
};

export function engagementReducer(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}
