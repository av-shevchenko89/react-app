import fs from 'fs';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { App } from './app';
import { Html } from './Html/Server';

const port = 9000;
const server = express();
const jsFiles: string[] = [];

fs.readdirSync('./dist/assets').forEach((file) => {
  if (file.split('.').pop() === 'js') jsFiles.push('/assets/' + file);
});

server.use('/assets', express.static('./dist/assets'));

server.use('/favicon.ico', express.static('./favicon.ico'));

server.use(express.static('server'));

server.get('*', async (req, res) => {
  let html = renderToString(
    <Html scripts={jsFiles}>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </Html>
  );

  if (req.url === '/') {
    res.redirect('/search');
    return;
  }

  res.send('<!DOCTYPE html>' + html);
});

server.listen(port, () => console.log(`Listening on port ${port}`));
