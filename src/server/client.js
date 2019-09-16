import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import StyleContext from 'isomorphic-style-loader/StyleContext';

import buildStore from '../client/store';
import App from '../client/components/App.jsx';

const initialState = window.__INITIAL_STATE__;

const store = buildStore(initialState);

const insertCss = (...styles) => {
  const removeCss = styles.map(style => style._insertCss());
  return () => removeCss.forEach(dispose => dispose());
};

ReactDOM.hydrate(
  <Provider store={store}>
    <StyleContext.Provider value={{ insertCss }}>
      <App />
    </StyleContext.Provider>
  </Provider>
  , document.getElementById('root')
);