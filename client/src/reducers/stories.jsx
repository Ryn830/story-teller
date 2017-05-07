export const SET_STORIES = 'SET_STORIES';
import $ from 'jquery';

export const fetchStories = function() {
  return function(dispatch) {
    $.get({url: '/stories', dataType: 'json', contentType: 'application/json', success: function(data) {
      dispatch({ type: SET_STORIES, stories: data });
    }});
  }
};

export function storiesReducer(state = [], action) {
  switch (action.type) {
    case SET_STORIES:
      return action.stories.Items;
    default:
      return state;
  }
}
