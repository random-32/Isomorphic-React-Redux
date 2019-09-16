import ACTIONS from '../actions';

const clickTile = tile => {
  return {
    type: ACTIONS.TILE_CLICKED,
    payload: tile,
  };
};

const resizeBoard = size => {
  return {
    type: ACTIONS.RESIZE_BOARD,
    payload: size,
  };
};

export default {
  clickTile,
  resizeBoard,
};