import { combineReducers } from 'redux';

import clickTileReducer from './clickTileReducer.js';
import resizeBoardReducer from './resizeBoardReducer.js';
import changeSizeReducer from './changeSizeReducer.js';

export default combineReducers({
  selectedTile: clickTileReducer,
  board: resizeBoardReducer,
  size: changeSizeReducer,
});