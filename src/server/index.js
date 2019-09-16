import path from 'path';
import express from 'express';
import cors from 'cors';
import _ from 'underscore';

import buildStore from '../client/store';
import isomorphicRender from './isomorphic.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('*', (req, res) => {
  const store = buildStore();
  const html = isomorphicRender(store);

  res.status(200).send(html);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));