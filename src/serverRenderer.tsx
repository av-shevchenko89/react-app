import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App, {  AppContext } from './app';

function renderHTML(html: string) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>Movie App (SSR)</title>
          ${
            process.env.development
              ? ''
              : '<link href="/css/main.css" rel="stylesheet" type="text/css">'
          }
        </head>
        <body>
          <div id="root">${html}</div>
          <script src="/js/client.js"></script>
        </body>
      </html>
  `;
}

export function serverRenderer() {
  return (req: any, res: any) => {
    // This context object contains the results of the render
    const context: AppContext = {url: ''};

    const html = renderToString(
      <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
    );

    // context.url will contain the URL to redirect to if a <Navigate> was used
    if (context.url) {
      res.writeHead(302, {
        Location: context.url,
      });
      res.end();
      return;
    }

    res.send(renderHTML(html));
  };
}
