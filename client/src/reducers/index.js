import { combineReducers } from 'redux';
import { engagementReducer as engagement } from './engagement';
import { usernameReducer as username } from './username';
import { storiesReducer as stories } from './stories';

import blocks from './blocks'

const rootReducer = combineReducers({
  blocks,
  engagement,
  stories,
  username
});

export default rootReducer;
