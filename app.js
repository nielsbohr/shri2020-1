const express = require('express');
const path = require('path');
const fs = require('fs');
const templater = require('./src/js/templater');

const app = express();

app.use('/static', express.static(`${__dirname}/build`));

app.get('/index|product', (req, res) => {
  const page = req.path.replace('/', '');

  const jsonPath = path.resolve(__dirname, 'src/pages', `${page}.json`);
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

app.listen(3000, () => { console.log('Listening 3000 port'); });
