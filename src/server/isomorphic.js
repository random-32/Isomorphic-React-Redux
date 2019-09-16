import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import StyleContext from 'isomorphic-style-loader/StyleContext';
import serialize from 'serialize-javascript';

import renderHtml from './renderHtml.js';
import App from '../client/components/App.jsx';

function isomorphicRender(store) {
  const css = new Set();
  const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()));

  const reactString = renderToString(
    <Provider store={store}>
      <StyleContext.Provider value={{ insertCss }}>
        <App />
      </StyleContext.Provider>
    </Provider>
  );

  return renderHtml(reactString, [...css].join(''), serialize(store.getState()));
}



export default isomorphicRender;