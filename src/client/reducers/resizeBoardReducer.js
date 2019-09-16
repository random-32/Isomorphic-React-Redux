import ACTIONS from '../actions';
import _ from 'underscore';

const resizeBoardReducer = (state = _.range(1, 26), action) => {
  if (action.type === ACTIONS.RESIZE_BOARD) {
    return Object.assign({}, state, { board: _.range(1, action.payload.size + 1) });
  }
  return state;
};

export default resizeBoardReducer;