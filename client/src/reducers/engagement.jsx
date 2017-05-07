export const SET_ENGAGMENT = 'SET_ENGAGMENT';
import $ from 'jquery';

export const fetchEngagement = function() {
  return function(dispatch) {
    $.get({url: '/commentMetrics', dataType: 'json', contentType: 'application/json', success: function(data) {
      dispatch({ type: SET_ENGAGMENT, engagement: data[0] });
    }});
  }
};

export function engagementReducer(state = {}, action) {
  switch (action.type) {
    case SET_ENGAGMENT:
      return action.engagement;
    default:
      return state;
  }
}
