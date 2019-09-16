import ACTIONS from '../actions';

const clickTileReducer = (state = '', action) => {
  if (action.type === ACTIONS.TILE_CLICKED) {
    return Object.assign({}, state, { selectedTile: action.payload.tile });
  }
  return state;
};

export default clickTileReducer;