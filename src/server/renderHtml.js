import { Helmet } from 'react-helmet';

function renderHtml(reactString, cssString, initialState) {

  const helmet = Helmet.renderStatic();

  return `<!DOCTYPE html>
  <html>
    <head>
      ${ helmet.title.toString()}
      ${ helmet.meta.toString()}
      <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:300|Roboto:100,300,400,500&display=swap" rel="stylesheet"></link>
      <style>${cssString}</style>
      <script src="https://kit.fontawesome.com/80b6e84bc6.js"></script>
    </head>
    <body>
      <div id="root">${reactString}</div>
      <script>window.__INITIAL_STATE__  = ${initialState}</script>
      <script type="text/javascript" src="https://unpkg.com/react@16.9.0/umd/react.development.js"></script>
      <script type="text/javascript" src="https://unpkg.com/react-dom@16.9.0/umd/react-dom.development.js"></script>
      <script type="text/javascript" src="https://unpkg.com/redux@4.0.4/dist/redux.min.js"></script>
      <script type="text/javascript" src="https://unpkg.com/react-redux@7.1.1/dist/react-redux.min.js"></script>
      <script type="text/javascript" src="https://unpkg.com/redux-thunk@2.3.0/dist/redux-thunk.min.js"></script>
      <script type="text/javascript" src="https://unpkg.com/prop-types@15.7.2/prop-types.js"></script>
      <script src="./client.bundle.js"></script>
    </body>
  </html>`;
}

export default renderHtml;