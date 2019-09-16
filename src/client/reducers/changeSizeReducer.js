import ACTIONS from '../actions';

const changeSizeReducer = (state = 5, action) => {
  if (action.type === ACTIONS.RESIZE_BOARD) {
    return Object.assign({}, state, { size: action.payload.size });
  }
  return state;
};

export default changeSizeReducer;