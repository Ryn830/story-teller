import { combineReducers } from 'redux';
import { engagementReducer as engagement } from './engagement';
import { usernameReducer as username } from './username';

import blocks from './blocks'

const rootReducer = combineReducers({
  blocks,
  engagement,
  username
});

export default rootReducer;
