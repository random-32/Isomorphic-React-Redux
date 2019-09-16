import React from 'react';
import { connect } from 'react-redux';

const Board = ({ board }) => {
  const tilesPerRow = Math.floor(Math.sqrt(board.length));
  let tileWidth = Math.floor(10 / tilesPerRow);
  const fontSize = `${tileWidth}rem`;
  tileWidth += tilesPerRow === 5 ? 3 : tilesPerRow === 10 ? 1.5 : 0;
  const boardDimension = `${tileWidth * tilesPerRow}rem`;
  const tileDimension = `${tileWidth}rem`;

  return (
    <div className="board" style={{ width: boardDimension, height: boardDimension }}>
      {board.map(tile => (
        <div className="tile" key={tile} style={{ width: tileDimension, height: tileDimension, fontSize }}>{tile}</div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    board: state.board,
  };
};

export default connect(mapStateToProps)(Board);