const express = require('express');
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const path = require('path');
const fs = require('fs');
const templater = require('./templater');

const compiler = webpack(require('./webpack.config.js'));

const app = express();

app.use('/static', express.static(`${__dirname}/build`));

app.use(
  middleware(compiler, {
    lazy: false,
  }),
);

app.get('/index|product', (req, res) => {
  const page = req.path.replace('/', '');

  const jsonPath = path.resolve(__dirname, 'pages', `${page}.json`);
  const bemjson = JSON.parse(fs.readFileSync(jsonPath, { encoding: 'utf-8' }));

  const contentHTML = templater(bemjson);

  const pageHTML = `
    <!doctype html>
    <html>
        <head>
            <link rel="stylesheet" href="/static/style.css">
        </head>
        <body>
            ${contentHTML}
            <script type="text/javascript" src="/static/script.js"></script>
        </body>
    </html>`;

  res.send(pageHTML);
});

app.listen(3000, () => {});
