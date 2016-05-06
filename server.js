import express from 'express';
const app = express();

app.use('/dist', express.static('dist'));
app.use('/', express.static('static'));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
