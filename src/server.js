'use strict';

const express = require('express');
const plantRouter = require('./routes/plants');
const app = express();
app.use(express.json());
require('dotenv').config();
const PORT = process.env.PORT || 3002;


app.get('/', async (req, res, next) => {
  res.status(200).send('Hello world');
});

app.use(plantRouter);

function start() {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
}

module.exports = { start , app };
