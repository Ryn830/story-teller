import { combineReducers } from 'redux';
import { engagementReducer as engagement } from './engagement';

import blocks from './blocks'

const rootReducer = combineReducers({
  blocks,
  engagement
});

export default rootReducer;
