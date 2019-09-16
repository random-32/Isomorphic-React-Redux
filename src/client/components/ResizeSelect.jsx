import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import ACTION_CREATORS from '../actionCreators';

const ResizeSelect = ({ selectSize }) => {

  return (
    <select name="" id="" className="select-box">
      <option
        value=""
        onSelect={(e) => (e.preventDefault(), selectSize(25))}
      >
        5 x 5
      </option>
      <option
        value=""
        onSelect={(e) => (e.preventDefault(), selectSize(100))}
      >
        10 x 10
      </option>
      <option
        value=""
        onSelect={(e) => (e.preventDefault(), selectSize(400))}
      >
        20 x 20
      </option>
    </select>
  );
};

const mapDispatchToProps = dispatch => {
  // return bindActionCreators(ACTION_CREATORS.resizeBoard, dispatch);
  return {
    selectSize: size => dispatch(ACTION_CREATORS.resizeBoard(size)),
  };
};

export default connect(() => { return {} }, mapDispatchToProps)(ResizeSelect);