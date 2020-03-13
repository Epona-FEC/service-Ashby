const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3004;

app.use(morgan('dev'));



app.listen(port, () => {
  console.log('Express server for item detail now listening on port 3004');
});


