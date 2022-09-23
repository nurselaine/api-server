'use strict';

const express = require('express');
require('dotenv').config();
const plantRouter = require('./routes/plants');

const PORT = process.env.PORT || 3002;
const app = express();
app.use(express.json());


app.get('/', async (req, res, next) => {
  res.status(200).send('Hello world');
});

app.use(plantRouter);


function start() {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
}

module.exports = { start , app };
