import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from '../assets/styles/main.scss';

import Board from './Board.jsx';
import ResizeSelect from './ResizeSelect.jsx';

const App = ({ }) => {

  return (
    <div className="page-container">
      <h1 className="page-title">
        Minesweeper
      </h1>
      <ResizeSelect />
      <Board />
    </div>
  );
};

export default withStyles(s)(App);