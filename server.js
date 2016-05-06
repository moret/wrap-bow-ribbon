import fs from 'fs';
import express from 'express';

const app = express();

app.use('/dist', express.static('dist'));
app.use('/', (req, res) => {
  var assets = JSON.parse(fs.readFileSync('./webpack-assets.json', 'utf8'));
  res.send(`<!doctype html>
    <html>
      <head>
        <script src='${assets.vendor.js}'></script>
        <link rel='stylesheet' type='text/css' href='${assets.main.css}' />
      </head>
      <body>
        <div id='app'>loading...</div>
        <script src='${assets.main.js}'></script>
      </body>
    </html>
  `)
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
