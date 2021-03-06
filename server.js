const express = require('express');
const app = express();

const port = process.env.PORT || 6060;
const host = process.env.HOST || 'localhost';

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const morgan = require('morgan');
app.use(morgan('dev'));

const router = require('./router')();
app.use('/api', router);

app.listen(port, () => {
  console.log(`runing on prot http://localhost:${port}`);
});
